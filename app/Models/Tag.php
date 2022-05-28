<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\Sluggable;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\SluggableScopeHelpers;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;

class Tag extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use Sluggable, SluggableScopeHelpers;
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
        return $this->belongsToMany(Article::class, 'article_tag');
    }
    public function profiles()
    {
        return $this->belongsToMany(Profile::class, 'profile_tag');
    }
    public function sections()
    {
        return $this->belongsToMany(Section::class, 'section_tag');
    }

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'slug_or_name',
            ],
        ];
    }
    // The slug is created automatically from the "name" field if no slug exists.
    public function getSlugOrNameAttribute()
    {
        if ($this->slug != '') {
            return $this->slug;
        }

        return $this->name;
    }
}
