<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Backpack\CRUD\app\Models\Traits\SpatieTranslatable\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasFactory;
    use HasRoles;
    use CrudTrait;
    use HasTranslations;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $translatable = ['name'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function profiles()
    {
        return $this->belongsToMany(Profile::class);
    }


    public function getSupervisors()
    {
        $supervisor_roles = config('role.supervisors');
        return $this->all()->filter(function ($user) use ($supervisor_roles) {
            if ($user->hasRole($supervisor_roles)) {
                return $user->id;
            }
            return false;
        });
    }
}
