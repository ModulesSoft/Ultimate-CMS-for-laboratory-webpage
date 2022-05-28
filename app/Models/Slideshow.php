<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Slideshow extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;

    protected $table = 'slideshow';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'landscape_image', 'portrait_image', 'link'];
    protected $translatable = ['title'];
}
