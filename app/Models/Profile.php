<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Profile extends Model
{
    use CrudTrait;
    use HasRoles;
    use HasFactory;
    use HasTranslations;

    protected $table = 'profiles';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'name', 'image', 'research_title', 'research_text',
        'graduation', 'status', 'user_id', 'supervisor_id', 'tags'
    ];
    protected $translatable = ['name', 'research_title', 'research_text'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id');
    }




    // many to many
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
