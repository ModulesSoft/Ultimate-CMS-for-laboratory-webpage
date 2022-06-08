<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles;
    use CrudTrait;

    // list of supervisor roles for showing in profile supervisors list
    private $supervisor_roles = ['Professor', 'Adjunct prof'];
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
        return $this->all()->filter(function ($user) {
            if ($user->hasRole($this->supervisor_roles)) {
                return $user->id;
            }
            return false;
        });
    }
}
