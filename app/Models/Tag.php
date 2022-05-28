<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;

class Tag extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
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
}
