<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProfileRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use App\Models\User;

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
    use \Backpack\CRUD\app\Http\Controllers\Operations\ReorderOperation {
        reorder as traitReorder;
    }

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Profile::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/profile');
        CRUD::setEntityNameStrings(config('permission.profile'), 'profiles');
        if (!backpack_user()->can(config('permission.admin'))) {
            CRUD::operation('show', function () {
                CRUD::removeButton('delete');
            });
        }
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
        CRUD::column('supervisors');
        CRUD::column('research_title');
        CRUD::column('status');
        CRUD::column('tags');
        if (!backpack_user()->can(config('permission.admin'))) {
            CRUD::removeButton('delete');
            CRUD::removeButton('reorder');
        }
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
        CRUD::field('name')->attributes(([
            'readonly' => 'readonly'
        ]))->type('text');
        CRUD::field('image')->type('image');
        CRUD::field('research_title')->type('text');
        CRUD::field('research_text')->type('textarea');
        CRUD::field('status')->type('enum');
        CRUD::field('supervisors')->options((function () {
            return (new User)->getSupervisors();
        }));
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
    protected function setupDeleteOperation()
    {
        if (!backpack_user()->can((config('permission.admin')))) {
            return abort(403);
        }
    }
    public function reorder()
    {
        // your custom code here
        if (!backpack_user()->can(config('permission.admin'))) {
            return abort(403);
        }
        // call the method in the trait
        return $this->traitReorder();
    }
    protected function setupReorderOperation()
    {
        // define which model attribute will be shown on draggable elements 
        $this->crud->set('reorder.label', 'name');
        // define how deep the admin is allowed to nest the items
        // for infinite levels, set it to 0
        $this->crud->set('reorder.max_level', 1);
    }
}
