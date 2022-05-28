<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class FooterRow extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;

    public $timestamps = false;
    protected $table = 'footer_rows';
    protected $primaryKey = 'id';
    protected $fillable = ['column_id', 'text', 'link', 'base64_image'];
    protected $translatable = ['text'];
    public function column()
    {
        return $this->belongsTo(FooterColumn::class, 'column_id');
    }
}
