<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProfileRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ProfileCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ProfileCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        if (!backpack_user()->can('profile') && !backpack_user()->can('admin')) {
            return abort(403);
        }
        CRUD::setModel(\App\Models\Profile::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/profile');
        CRUD::setEntityNameStrings('profile', 'profiles');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::column('name');
        CRUD::column('user_id')->label('supervisors');
        CRUD::column('research_title');
        CRUD::column('status');
        CRUD::column('tags');
        if (!backpack_user()->can('admin'))
            CRUD::removeButton('delete');
        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(ProfileRequest::class);
        CRUD::field('name');
        CRUD::field('image')->type('image');
        CRUD::field('research_title')->type('text');
        CRUD::field('research_text')->type('textarea');
        CRUD::field('status')->type('enum');
        CRUD::addField(
            [
                'name'      => 'users', // the db column for the foreign key
                'label'     => 'supervisors',
                'model'     => 'App\Models\User',
                'entity'    => 'users',
                'pivot'     => true,
                'options'   => (function () {
                    return (new \App\Models\User)->getSupervisors();
                }),
            ]

        );
        CRUD::field('tags');

        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
