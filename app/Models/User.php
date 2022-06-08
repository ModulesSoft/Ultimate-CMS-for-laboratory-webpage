<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles;
    use CrudTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

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
        $supervisor_roles = explode(',', env('SUPERVISOR_ROLES'));
        return $this->all()->filter(function ($user) use ($supervisor_roles) {
            if ($user->hasRole($supervisor_roles)) {
                return $user->id;
            }
            return false;
        });
    }
}
