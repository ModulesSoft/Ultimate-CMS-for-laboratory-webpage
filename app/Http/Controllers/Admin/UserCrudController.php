<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Illuminate\Http\Request;
// Added
use App\Http\Requests\UserStoreCrudRequest as StoreRequest;
use App\Http\Requests\UserUpdateCrudRequest as UpdateRequest;
use Illuminate\Support\Facades\Hash;

class UserCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation {
        store as traitStore;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation {
        update as traitUpdate;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | BASIC CRUD INFORMATION
        |--------------------------------------------------------------------------
        */
        CRUD::setModel(\App\Models\User::class);
        CRUD::setEntityNameStrings('user', 'users');
        CRUD::setRoute(config('backpack.base.route_prefix') . '/user');

        // Columns.
        CRUD::setColumns([
            [
                'name'  => 'name',
                'type'  => 'text',
            ],
            [
                'name'  => 'email',
                'type'  => 'email',
            ],
            [ // n-n relationship (with pivot table)
                'type'      => 'select_multiple',
                'name'      => 'roles', // the method that defines the relationship in your Model
                'entity'    => 'roles', // the method that defines the relationship in your Model
                'attribute' => 'name', // foreign key attribute that is shown to user
                'model'     => \App\Models\Role::class, // foreign key model
            ],
            // [ // n-n relationship (with pivot table)
            //     'type'      => 'select_multiple',
            //     'name'      => 'permissions', // the method that defines the relationship in your Model
            //     'entity'    => 'permissions', // the method that defines the relationship in your Model
            //     'attribute' => 'name', // foreign key attribute that is shown to user
            //     'model'     => \App\Models\Permission::class, // foreign key model
            // ],
        ]);
    }
    public function setupCreateOperation()
    {
        $this->addUserFields();
        CRUD::setValidation(StoreRequest::class);
    }

    public function setupUpdateOperation()
    {
        $this->addUserFields();
        CRUD::removeFields(
            [
                'name'  => 'password',
                'type'  => 'password',
            ]
        );
        CRUD::removeFields(

            [
                'name'  => 'password_confirmation',
                'label' => 'Confirm Password',
                'type'  => 'password',
            ]
        );
        CRUD::setValidation(UpdateRequest::class);
    }
    protected function setupDeleteOperation()
    {
        if (!backpack_user()->id !== 1) {
            return abort(403);
        }
    }

    /**
     * Store a newly created resource in the database.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store()
    {
        CRUD::setRequest(CRUD::validateRequest());
        CRUD::setRequest($this->handlePasswordInput(CRUD::getRequest()));
        CRUD::unsetValidation(); // validation has already been run

        return $this->traitStore();
    }

    /**
     * Update the specified resource in the database.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update()
    {
        CRUD::setRequest(CRUD::validateRequest());
        CRUD::setRequest($this->handlePasswordInput(CRUD::getRequest()));
        CRUD::unsetValidation(); // validation has already been run

        return $this->traitUpdate();
    }

    /**
     * Handle password input fields.
     */
    protected function handlePasswordInput($request)
    {
        // Remove fields not present on the user.
        $request->request->remove('password_confirmation');
        $request->request->remove('roles_show');
        $request->request->remove('permissions_show');

        // Encrypt password if specified.
        if ($request->input('password')) {
            $request->request->set('password', Hash::make($request->input('password')));
        } else {
            $request->request->remove('password');
        }

        return $request;
    }

    protected function addUserFields()
    {
        CRUD::addFields([
            [
                'name'  => 'name',
                'type'  => 'text',
            ],
            [
                'name'  => 'email',
                'type'  => 'email',
            ],
            [
                'name'  => 'password',
                'type'  => 'password',
            ],
            [
                'name'  => 'password_confirmation',
                'label' => 'Confirm Password',
                'type'  => 'password',
            ],
            [
                // two interconnected entities
                'label'             => 'User Roles and Permissions',
                'field_unique_name' => 'user_role_permission',
                'type'              => 'checklist_dependency',
                'name'              => ['roles', 'permissions'],
                'subfields'         => [
                    'primary' => [
                        'label'            => 'Roles',
                        'name'             => 'roles', // the method that defines the relationship in your Model
                        'entity'           => 'roles', // the method that defines the relationship in your Model
                        'entity_secondary' => 'permissions', // the method that defines the relationship in your Model
                        'attribute'        => 'name', // foreign key attribute that is shown to user
                        'model'            => config('permission.models.role'), // foreign key model
                        'pivot'            => true, // on create&update, do you need to add/delete pivot table entries?]
                        'number_columns'   => 3, //can be 1,2,3,4,6
                    ],
                    'secondary' => [
                        'label'          => ucfirst('Permissions'),
                        'name'           => 'permissions', // the method that defines the relationship in your Model
                        'entity'         => 'permissions', // the method that defines the relationship in your Model
                        'entity_primary' => 'roles', // the method that defines the relationship in your Model
                        'attribute'      => 'name', // foreign key attribute that is shown to user
                        'model'          => config('permission.models.permission'), // foreign key model
                        'pivot'          => true, // on create&update, do you need to add/delete pivot table entries?]
                        'number_columns' => 3, //can be 1,2,3,4,6
                    ],
                ],
            ],
        ]);
    }
}
