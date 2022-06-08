<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use App\Http\Requests\RoleStoreCrudRequest as StoreRequest;
use App\Http\Requests\RoleUpdateCrudRequest as UpdateRequest;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

// VALIDATION

class RoleCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        $this->role_model = $role_model = config('backpack.permissionmanager.models.role');
        $this->permission_model = $permission_model = config('backpack.permissionmanager.models.permission');

        CRUD::setModel($role_model);
        CRUD::setEntityNameStrings('Role', 'Roles');
        CRUD::setRoute(backpack_url('role'));

        // deny access according to configuration file
        if (config('backpack.permissionmanager.allow_role_create') == false) {
            CRUD::denyAccess('create');
        }
        if (config('backpack.permissionmanager.allow_role_update') == false) {
            CRUD::denyAccess('update');
        }
        if (config('backpack.permissionmanager.allow_role_delete') == false) {
            CRUD::denyAccess('delete');
        }
    }

    public function setupListOperation()
    {
        CRUD::addColumn([
            'name'  => 'name',
            'type'  => 'text',
        ]);
        CRUD::addColumn([   // select_multiple: n-n relationship (with pivot table)
            'type'      => 'relationship_count',
            'name'      => 'users', // the method that defines the relationship in your Model
            'wrapper'   => [
                'href' => function ($crud, $column, $entry, $related_key) {
                    return backpack_url('user?role=' . $entry->getKey());
                },
            ],
            'suffix'    => ' users',
        ]);
        if (config('backpack.permissionmanager.multiple_guards')) {
            CRUD::addColumn([
                'name'  => 'guard_name',
                'type'  => 'text',
            ]);
        }
        CRUD::addColumn([
            // n-n relationship (with pivot table)
            'type'      => 'select_multiple',
            'name'      => 'permissions', // the method that defines the relationship in your Model
            'entity'    => 'permissions', // the method that defines the relationship in your Model
            'attribute' => 'name', // foreign key attribute that is shown to user
            'model'     => $this->permission_model, // foreign key model
            'pivot'     => true, // on create&update, do you need to add/delete pivot table entries?
        ]);
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

        CRUD::addField([
            'type'      => 'checklist',
            'name'      => 'permissions',
            'entity'    => 'permissions',
            'attribute' => 'name',
            'model'     => $this->permission_model,
            'pivot'     => true,
        ]);
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
