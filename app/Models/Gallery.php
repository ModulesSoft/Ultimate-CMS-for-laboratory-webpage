<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Gallery extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;

    protected $table = 'gallery';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'image', 'video', 'small_thumbnail', 'medium_thumbnail', 'big_thumbnail'];
    protected $translatable = ['title'];
}
