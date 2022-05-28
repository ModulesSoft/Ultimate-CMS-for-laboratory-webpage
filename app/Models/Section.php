<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Section extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;

    protected $table = 'sections';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable =
    [
        'title', 'content', 'page_id', 'parent_id', 'icon',
        'featured', 'status', 'tags'
    ];
    protected $translatable = ['title', 'content'];

    public function parent()
    {
        return $this->belongsTo(Section::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Section::class, 'parent_id');
    }

    public function scopeFirstLevelItems($query)
    {
        return $query->where('depth', '1')
            ->orWhere('depth', null)
            ->orderBy('lft', 'ASC');
    }

    public function page()
    {
        return $this->belongsTo(Page::class, 'page_id');
    }


    // many to many
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
