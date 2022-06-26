<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Page extends Model
{
    use CrudTrait;
    use HasRoles;
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

    // Generate a slug if it is not set
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] =  Str::slug($value);
    }
    public function setSlugAttribute()
    {
        $this->attributes['slug'] = $this->attributes['slug'];
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
