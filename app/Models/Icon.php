<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Spatie\Permission\Traits\HasRoles;

class Icon extends Model
{
    use CrudTrait;
    use HasRoles;

    protected $table = 'icons';
    protected $primaryKey = 'id';
    public $timestamps = true;
    // protected $guarded = ['id'];
    protected $fillable = ['name', 'icon'];
    // protected $hidden = [];
    // protected $dates = [];
}
