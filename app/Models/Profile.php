<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Profile extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;

    protected $table = 'profiles';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'image', 'research_title', 'research_text',
        'status', 'user_id', 'tags'
    ];
    protected $translatable = ['research_title', 'research_text'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function supervisors()
    {
        return $this->belongsToMany(User::class)->whereIn('user_id', (new \App\Models\User)->getSupervisors()->pluck('id')->toArray());
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'PUBLISHED')
            ->where('date', '<=', date('Y-m-d'))
            ->orderBy('date', 'DESC');
    }



    // many to many
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public static function boot()
    {
        parent::boot();
        static::deleted(function ($obj) {
            \Storage::disk('public')->delete($obj->image);
        });
    }
    public function getNameAttribute()
    {
        $user = new User;
        $name = $user->whereHas('profile', function ($q) {
            $q->where('id', $this->id);
        })->first()->name;
        return $name;
    }
    public function setImageAttribute($value)
    {
        $attribute_name = "image";
        // or use your own disk, defined in config/filesystems.php
        $disk = config('backpack.base.root_disk_name');
        // destination path relative to the disk above
        $destination_path = "public/uploads/profiles";
        $thumb150x150_path = "public/uploads/profiles/thumb150x150";
        $thumb300x300_path = "public/uploads/profiles/thumb300x300";
        // if the image was erased
        if ($value == null) {
            // delete the image from disk
            \Storage::disk($disk)->delete($this->{$attribute_name});

            // set null in the database column
            $this->attributes[$attribute_name] = null;
        }

        // if a base64 was sent, store it in the db
        if (Str::startsWith($value, 'data:image')) {
            // 0. Make the image
            $image = \Image::make($value)->encode('jpg', 90);
            $thumb150 = \Image::make($value)->encode('jpg', 90)->resize(150, 150);
            $thumb300 = \Image::make($value)->encode('jpg', 90)->resize(300, 300);

            // 1. Generate a filename.
            $filename = md5($value . time()) . '.jpg';

            // 2. Store the image on disk.
            \Storage::disk($disk)->put($destination_path . '/' . $filename, $image->stream());
            \Storage::disk($disk)->put($thumb150x150_path . '/' . $filename, $thumb150->stream());
            \Storage::disk($disk)->put($thumb300x300_path . '/' . $filename, $thumb300->stream());

            // 3. Delete the previous image, if there was one.
            \Storage::disk($disk)->delete($this->{$attribute_name});

            // 4. Save the public path to the database
            // but first, remove "public/" from the path, since we're pointing to it
            // from the root folder; that way, what gets saved in the db
            // is the public URL (everything that comes after the domain name)
            $public_destination_path = Str::replaceFirst('public/', '', $destination_path);
            $this->attributes[$attribute_name] = $public_destination_path . '/' . $filename;
        }
    }

    // POLICIES:

    // Override the save method to set authentorized user_id to the profile
    public function save(array $options = [])
    {
        if ($this->user_id === null) { // It's a new profile
            // Don't let the user create new profile if one exists
            if ($this->where('user_id', '=', backpack_auth()->user()->id)->exists()) {
                return abort(403);
            }
            $this->user_id = backpack_auth()->user()->id;
        } else { //It's update
            if (!backpack_user()->can(config('permission.admin'))) {
                // Don't let the user edit other's profile (if is not an admin)
                if ($this->user_id !== backpack_auth()->user()->id) {
                    return abort(403);
                }
            }
        }
        parent::save();
    }
    public function delete()
    {
        // Only admin can delete a profile
        if (!backpack_user()->can(config('permission.admin'))) {
            return false;
        }
        parent::delete();
    }
}
