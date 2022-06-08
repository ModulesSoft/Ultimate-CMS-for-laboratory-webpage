<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use App\Http\Requests\PermissionStoreCrudRequest as StoreRequest;
use App\Http\Requests\PermissionUpdateCrudRequest as UpdateRequest;

// VALIDATION

class PermissionCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->role_model = $role_model = config('backpack.permissionmanager.models.role');
        $this->permission_model = $permission_model = config('backpack.permissionmanager.models.permission');

        CRUD::setModel($permission_model);
        CRUD::setEntityNameStrings('Permission', 'Permissions');
        CRUD::setRoute(backpack_url('permission'));

        // deny access according to configuration file
        if (config('backpack.permissionmanager.allow_permission_create') == false) {
            CRUD::denyAccess('create');
        }
        if (config('backpack.permissionmanager.allow_permission_update') == false) {
            CRUD::denyAccess('update');
        }
        if (config('backpack.permissionmanager.allow_permission_delete') == false) {
            CRUD::denyAccess('delete');
        }
    }

    public function setupListOperation()
    {
        CRUD::addColumn([
            'name'  => 'name',
            'type'  => 'text',
        ]);

        if (config('backpack.permissionmanager.multiple_guards')) {
            CRUD::addColumn([
                'name'  => 'guard_name',
                'type'  => 'text',
            ]);
        }
    }

    public function setupCreateOperation()
    {
        $this->addFields();
        CRUD::setValidation(StoreRequest::class);

        //otherwise, changes won't have effect
        \Cache::forget('spatie.permission.cache');
    }

    public function setupUpdateOperation()
    {
        $this->addFields();
        CRUD::setValidation(UpdateRequest::class);

        //otherwise, changes won't have effect
        \Cache::forget('spatie.permission.cache');
    }

    private function addFields()
    {
        CRUD::addField([
            'name'  => 'name',
            'type'  => 'text',
        ]);

        if (config('backpack.permissionmanager.multiple_guards')) {
            CRUD::addField([
                'name'    => 'guard_name',
                'type'    => 'select_from_array',
                'options' => $this->getGuardTypes(),
            ]);
        }
    }

    /*
     * Get an array list of all available guard types
     * that have been defined in app/config/auth.php
     *
     * @return array
     **/
    private function getGuardTypes()
    {
        $guards = config('auth.guards');

        $returnable = [];
        foreach ($guards as $key => $details) {
            $returnable[$key] = $key;
        }

        return $returnable;
    }
    protected function setupDeleteOperation()
    {
        if (backpack_user()->id !== 1) {
            return abort(403);
        }
    }
}
