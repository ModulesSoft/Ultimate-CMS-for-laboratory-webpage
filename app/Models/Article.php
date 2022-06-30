<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\Sluggable;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\SluggableScopeHelpers;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Article extends Model
{
    use CrudTrait;
    use HasRoles;
    use Sluggable, SluggableScopeHelpers;
    use HasTranslations;

    protected $table = 'articles';
    protected $primaryKey = 'id';
    public $timestamps = true;
    // protected $guarded = ['id'];
    protected $fillable = [
        'category_id', 'title', 'slug',  'content',
        'image', 'status',  'featured', 'date', 'tags'
    ];
    protected $translatable = ['title', 'content'];
    // protected $hidden = [];
    // protected $dates = [];
    protected $casts = [
        'featured'  => 'boolean',
        'date'      => 'date',
    ];


    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }


    // many to many
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }


    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'slug_or_title',
            ],
        ];
    }
    // The slug is created automatically from the "title" field if no slug exists.
    public function getSlugOrTitleAttribute()
    {
        if ($this->slug != '') {
            return $this->slug;
        }

        return $this->title;
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'PUBLISHED')
            ->where('date', '<=', date('Y-m-d'))
            ->orderBy('date', 'DESC');
    }
    public static function boot()
    {
        parent::boot();
        static::deleted(function ($obj) {
            \Storage::disk('public')->delete($obj->image);
        });
    }
    public function setImageAttribute($value)
    {
        $attribute_name = "image";
        // or use your own disk, defined in config/filesystems.php
        $disk = config('backpack.base.root_disk_name');
        // destination path relative to the disk above
        $destination_path = "public/uploads/articles";
        $thumb150x150_path = "public/uploads/articles/thumb150x150";
        $thumb300x300_path = "public/uploads/articles/thumb300x300";
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
}
