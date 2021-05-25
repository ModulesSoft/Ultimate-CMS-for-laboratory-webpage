<?php

namespace App\Models;

use Backpack\CRUD\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Backpack\CRUD\ModelTraits\SpatieTranslatable\HasTranslations;

class Monster extends Model
{
    use CrudTrait;
    use HasTranslations;

    /*
    |--------------------------------------------------------------------------
    | GLOBAL VARIABLES
    |--------------------------------------------------------------------------
    */

    protected $table = 'students';
    protected $primaryKey = 'id';
    public $timestamps = true;
    // protected $guarded = ['id'];
    protected $fillable = ['name', 'email', 'role' ,'research_title','research_text', 'supervisor',  'image',  'status','user_id'];
    protected $translatable = ['name', 'research_title','research_text','supervisor'];
    // protected $hidden = [];
    // protected $dates = [];

    /*
    |--------------------------------------------------------------------------
    | FUNCTIONS
    |--------------------------------------------------------------------------
    */

//    public function openGoogle($crud = false)
//    {
//        return '<a class="btn btn-xs btn-default" target="_blank" href="http://google.com?q='.urlencode($this->text).'" data-toggle="tooltip" title="Just a demo custom button."><i class="fa fa-search"></i> Google it</a>';
//    }

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

    public function article()
    {
        return $this->belongsTo('Backpack\NewsCRUD\app\Models\Article', 'select2_from_ajax');
    }

    public function articles()
    {
        return $this->belongsToMany('Backpack\NewsCRUD\app\Models\Article', 'monster_article');
    }

    public function category()
    {
        return $this->belongsTo('Backpack\NewsCRUD\app\Models\Category', 'select');
    }

    public function categories()
    {
        return $this->belongsToMany('Backpack\NewsCRUD\app\Models\Category', 'monster_category');
    }

    public function tags()
    {
        return $this->belongsToMany('Backpack\NewsCRUD\app\Models\Tag', 'monster_tag');
    }

    /*
    |--------------------------------------------------------------------------
    | SCOPES
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | ACCESORS
    |--------------------------------------------------------------------------
    */

    public function getTextAndEmailAttribute()
    {
        return $this->name.' '.$this->email;
    }

    /*
    |--------------------------------------------------------------------------
    | MUTATORS
    |--------------------------------------------------------------------------
    */

    public function setImageAttribute($value)
    {
        $attribute_name = 'image';
        $disk = 'uploads'; // use Backpack's root disk; or your own
        $destination_path = '/students';

        // if the image was erased
        if ($value == null) {
            // delete the image from disk
            \Storage::disk($disk)->delete($this->{$attribute_name});

            // set null in the database column
            $this->attributes[$attribute_name] = null;
        }

        // if a base64 was sent, store it in the db
        if (starts_with($value, 'data:image')) {
            // 0. Make the image
            $image = \Image::make($value)->encode('jpg', 90);
            // 1. Generate a filename.
            $filename = md5($value.time()).'.jpg';
            // 2. Store the image on disk.
            \Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());
            // 3. Save the public path to the database
            $public_destination_path = Str::replaceFirst('public/', '', '/uploads'.$destination_path);
            $this->attributes[$attribute_name] = $public_destination_path.'/'.$filename;
        }
    }
}
