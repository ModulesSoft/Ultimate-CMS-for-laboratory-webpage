<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Tag extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasTranslations;

    protected $table = 'tags';
    protected $primaryKey = 'id';
    public $timestamps = true;
    // protected $guarded = ['id'];
    protected $fillable = ['keyword'];
    protected $translatable = ['keyword'];

    // protected $hidden = [];
    // protected $dates = [];

    public function articles()
    {
        return $this->belongsToMany(Article::class);
    }
    public function profiles()
    {
        return $this->belongsToMany(Profile::class);
    }
    public function sections()
    {
        return $this->belongsToMany(Section::class);
    }
    // POLICIES:
    public function delete()
    {
        // Only admin can delete a tag
        if (!backpack_user()->can(config('permission.admin'))) {
            return false;
        }
        parent::delete();
    }
    public function save(array $options = [])
    {
        // Only admin can update a tag
        if ($this->id && !backpack_user()->can(config('permission.admin'))) {
            return false;
        }
        parent::save();
    }
}
