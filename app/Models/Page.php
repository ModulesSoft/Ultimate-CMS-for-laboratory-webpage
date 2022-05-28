<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\Sluggable;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\SluggableScopeHelpers;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;

class Page extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use Sluggable, SluggableScopeHelpers;
    use HasTranslations;

    protected $table = 'pages';
    protected $primaryKey = 'id';
    public $timestamps = true;
    // protected $guarded = ['id'];
    protected $fillable = ['name', 'title', 'slug', 'introduction', 'conclusion', 'extras'];
    protected $translatable = ['name', 'title', 'introduction', 'conclusion'];
    // protected $hidden = [];
    // protected $dates = [];
    protected $fakeColumns = ['extras'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'slug_or_title',
            ],
        ];
    }


    // The slug is created automatically from the "name" field if no slug exists.
    public function getSlugOrTitleAttribute()
    {
        if ($this->slug != '') {
            return $this->slug;
        }

        return $this->title;
    }

    public function getPageLink()
    {
        return url($this->slug);
    }

    public function getOpenButton()
    {
        return '<a class="btn btn-default btn-xs" href="' . $this->getPageLink() . '" target="_blank">' .
            '<i class="fa fa-eye"></i> ' . trans('backpack::pagemanager.open') . '</a>';
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }
}
