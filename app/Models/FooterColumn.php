<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class FooterColumn extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;
    public $timestamps = false;
    protected $table = 'footer_columns';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];
    protected $translatable = ['title'];
    public function rows()
    {
        return $this->hasMany(FooterRow::class, 'column_id');
    }
}
