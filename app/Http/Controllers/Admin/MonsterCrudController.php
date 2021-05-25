<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\MonsterRequest as StoreRequest;
// VALIDATION: change the requests to match your own file names if you need form validation
use App\Http\Requests\MonsterRequest as UpdateRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use App\Models\Monster;

// image, name , email , research title, supervisor(s), research desc.
class MonsterCrudController extends CrudController
{
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | BASIC CRUD INFORMATION
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel('App\Models\Monster');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/monster');
        $this->crud->setEntityNameStrings('profile', 'Student profiles');
//        $this->crud->addClause('where', 'text', 'LIKE', "%".backpack_user()->name."%");
        /*
        |--------------------------------------------------------------------------
        | BASIC CRUD INFORMATION
        |--------------------------------------------------------------------------
        */

        // ------ CRUD COLUMNS
        $this->crud->addColumn('name'); // add a text column, at the end of the stack
        $this->crud->addColumn('email'); // add a single column, at the end of the stack
        $this->crud->addColumn('research_title'); // add a single column, at the end of the stack
        $this->crud->addColumn('role'); // add a single column, at the end of the stack
        // $this->crud->addColumns(); // add multiple columns, at the end of the stack
        // $this->crud->removeColumn('column_name'); // remove a column from the stack
        // $this->crud->removeColumns(['column_name_1', 'column_name_2']); // remove an array of columns from the stack
        // $this->crud->setColumnDetails('column_name', ['attribute' => 'value']); // adjusts the properties of the passed in column (by name)
        // $this->crud->setColumnsDetails(['column_1', 'column_2'], ['attribute' => 'value']);

        // -------------------------
        // ------ CRUD FIELDS ------
        // -------------------------

        // ----------
        // SIMPLE tab
        // ----------
        $this->crud->addField([
            'name' => 'name',
            'label' => 'Name',
            'type' => 'text',
            'tab' => 'Info',
            'value' => null,
        ]);
        if (Monster::where('user_id', backpack_user()->id)->first() || backpack_user()->hasRole('admin')) {//if it's not his first article
            $this->crud->addField([   // Hidden
                'name' => 'user_id',
                'type' => 'hidden',
                'tab' => 'Info',
            ]);
            $this->crud->addField([
                'name' => 'email',
                'label' => 'Email',
                'type' => 'email',
                'tab' => 'Info',
                'attributes' => ['readonly' => 'readonly'],
            ]);
            $this->crud->addField([
                'name' => 'role',
                'label' => 'Role',
                'type' => 'text',
                'tab' => 'Info',
                'attributes' => ['readonly' => 'readonly'],
            ]);
        }else{//if it's his first article
            $this->crud->addField([   // Hidden
                'name' => 'user_id',
                'type' => 'hidden',
                'default' => backpack_user()->id,
                'value' => backpack_user()->id,
                'tab' => 'Info',
            ]);
            $this->crud->addField([
                'name' => 'email',
                'label' => 'Email',
                'type' => 'email',
                'tab' => 'Info',
                'default' => backpack_user()->email,
                'value' => backpack_user()->email,
                'attributes' => ['readonly' => 'readonly'],
            ]);
            $this->crud->addField([
                'name' => 'role',
                'label' => 'Role',
                'type' => 'text',
                'tab' => 'Info',
                'default' => backpack_user()->getRoleNames()[0],
                'value' => backpack_user()->getRoleNames()[0],
                'attributes' => ['readonly' => 'readonly'],
            ]);
        }


        $this->crud->addField([   // Textarea
            'name' => 'research_title',
            'label' => 'research title',
            'type' => 'textarea',
            'tab' => 'Info',
        ]);
        $this->crud->addField([   // Textarea
            'name' => 'supervisor',
            'label' => 'supervisor(s)',
            'type' => 'textarea',
            'tab' => 'Info',
        ]);


//        $this->crud->addField([   // Hidden
//            'name' => 'hidden',
//            'type' => 'hidden',
//            'default' => 'hidden value',
//            'tab' => 'Info',
//        ]);
        // $table->string('image')->nullable;
        // $table->string('upload')->nullable;
        // $table->string('upload_multiple')->nullable;

        $this->crud->addField([   // Summernote
            'name'  => 'research_text',
            'label' => 'Research description',
            'type'  => 'summernote',
            'tab'   => 'Info',
        ]);
//        $this->crud->addField([   // CKEditor
//            'name' => 'research_text',
//            'label' => 'Research description',
//            'type' => 'ckeditor',
//            'tab' => 'Info',
//        ]);
        $this->crud->addField([
            'name' => 'status', // the name of the db column
            'label' => 'Status', // the input label
            'type' => 'radio',
            'options' => [ // the key will be stored in the db, the value will be shown as label;
                0 => 'Draft',
                1 => 'Published',
            ],
            // optional
            'inline' => true, // show the radios all on the same line?
            'tab' => 'Info',
        ]);

        $this->crud->addField([ // base64_image
            'label' => 'Profile image',
            'name' => 'image',
            'filename' => null, // set to null if not needed
            'type' => 'base64_image',
            'aspect_ratio' => 1, // set to 0 to allow any aspect ratio
            'crop' => true, // set to true to allow cropping, false to disable
            'src' => null, // null to read straight from DB, otherwise set to model accessor function
            'tab' => 'Profile picture',
        ]);


        // $table->string('range')->nullable;

        // $this->crud->removeField('name', 'update/create/both');

        // ------ CRUD BUTTONS
        // possible positions: 'beginning' and 'end'; defaults to 'beginning' for the 'line' stack, 'end' for the others;
        // $this->crud->addButton($stack, $name, $type, $content, $position); // add a button; possible types are: view, model_function
//        $this->crud->addButtonFromModelFunction('line', 'open_google', 'openGoogle', 'beginning'); // add a button whose HTML is returned by a method in the CRUD model
        // $this->crud->addButtonFromView($stack, $name, $view, $position); // add a button whose HTML is in a view placed at resources\views\vendor\backpack\crud\buttons
        // $this->crud->removeButton($name);
        // $this->crud->removeButtonFromStack($name, $stack);
        // $this->crud->removeAllButtons();
        // $this->crud->removeAllButtonsFromStack('line');

        // ------ CRUD DETAILS ROW
//        $this->crud->enableDetailsRow();
//        $this->crud->allowAccess('details_row');
//        $this->crud->setDetailsRowView('vendor.backpack.crud.details_row.monster');

        // ------ REVISIONS
        // You also need to use \Venturecraft\Revisionable\RevisionableTrait;
        // Please check out: https://laravel-backpack.readme.io/docs/crud#revisions
        // $this->crud->allowAccess('revisions');

        // ------ DATATABLE EXPORT BUTTONS
        // Show export to PDF, CSV, XLS and Print buttons on the table view.
        // Does not work well with AJAX datatables.

//        $this->crud->enableBulkActions();
//        $this->crud->addBulkDeleteButton();
//        $this->crud->enableExportButtons();
        if (!backpack_user()->hasRole('admin')) {
            $this->crud->denyAccess(['delete']);
        }

        if (Monster::where('user_id', backpack_user()->id)->first() && !backpack_user()->hasRole('admin')) {
            $this->crud->denyAccess(['create']);
        }
        if (backpack_user()->hasRole('admin')) {
            $this->crud->denyAccess(['create']);
            $this->crud->allowAccess('reorder');
            $this->crud->enableReorder('name', 0);
        }
        // ------ FILTERS
//        $this->addCustomCrudFilters();
    }

    public function store(StoreRequest $request)
    {
//        if (($request->get('user_id') == backpack_user()->id || $request->get('role') == backpack_user()->getRoleNames()[0]) || backpack_user()->hasRole('admin')) {
            $redirect_location = parent::storeCrud();
            return $redirect_location;
//        } else {
//            dd("You do not have access to other profiles!");
//        }
    }

    public function update(UpdateRequest $request)
    {
        // your additional operations before save here
        if (!Monster::where('user_id', backpack_user()->id)->first() && !backpack_user()->hasRole('admin')){
            dd("You do not have access to other profiles!");
        }
        if (($request->get('user_id') == backpack_user()->id) || backpack_user()->hasRole('admin')) {
            $redirect_location = parent::updateCrud();
            return $redirect_location;
        } else {
            dd("You do not have access to other profiles!");
        }
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry
    }

//    public function addCustomCrudFilters()
//    {
//        $this->crud->addFilter([ // add a "simple" filter called Draft
//            'type' => 'simple',
//            'name' => 'checkbox',
//            'label' => 'Simple',
//        ],
//            false, // the simple filter has no values, just the "Draft" label specified above
//            function () { // if the filter is active (the GET parameter "draft" exits)
//                $this->crud->addClause('where', 'checkbox', '1');
//            });
//
//        $this->crud->addFilter([ // dropdown filter
//            'name' => 'select_from_array',
//            'type' => 'dropdown',
//            'label' => 'Dropdown',
//        ], ['one' => 'One', 'two' => 'Two', 'three' => 'Three'], function ($value) {
//            // if the filter is active
//            $this->crud->addClause('where', 'select_from_array', $value);
//        });
//
//        $this->crud->addFilter([ // text filter
//            'type' => 'text',
//            'name' => 'text',
//            'label' => 'Text',
//        ],
//            false,
//            function ($value) { // if the filter is active
//                $this->crud->addClause('where', 'text', 'LIKE', "%$value%");
//            });
//
//        $this->crud->addFilter([
//            'name' => 'number',
//            'type' => 'range',
//            'label' => 'Range',
//            'label_from' => 'min value',
//            'label_to' => 'max value',
//        ],
//            false,
//            function ($value) { // if the filter is active
//                $range = json_decode($value);
//                if ($range->from && $range->to) {
//                    $this->crud->addClause('where', 'number', '>=', (float)$range->from);
//                    $this->crud->addClause('where', 'number', '<=', (float)$range->to);
//                }
//            });
//
//        $this->crud->addFilter([ // date filter
//            'type' => 'date',
//            'name' => 'date',
//            'label' => 'Date',
//        ],
//            false,
//            function ($value) { // if the filter is active, apply these constraints
//                $this->crud->addClause('where', 'date', '=', $value);
//            });
//
//        $this->crud->addFilter([ // daterange filter
//            'type' => 'date_range',
//            'name' => 'date_range',
//            'label' => 'Date range',
//            // 'date_range_options' => [
//            // 'format' => 'YYYY/MM/DD',
//            // 'locale' => ['format' => 'YYYY/MM/DD'],
//            // 'showDropdowns' => true,
//            // 'showWeekNumbers' => true
//            // ]
//        ],
//            false,
//            function ($value) { // if the filter is active, apply these constraints
//                $dates = json_decode($value);
//                $this->crud->addClause('where', 'date', '>=', $dates->from);
//                $this->crud->addClause('where', 'date', '<=', $dates->to);
//            });
//
//        $this->crud->addFilter([ // select2 filter
//            'name' => 'select2',
//            'type' => 'select2',
//            'label' => 'Select2',
//        ], function () {
//            return \Backpack\NewsCRUD\app\Models\Category::all()->keyBy('id')->pluck('name', 'id')->toArray();
//        }, function ($value) { // if the filter is active
//            $this->crud->addClause('where', 'select2', $value);
//        });
//
//        $this->crud->addFilter([ // select2_multiple filter
//            'name' => 'select2_multiple',
//            'type' => 'select2_multiple',
//            'label' => 'Select2 multiple',
//        ], function () {
//            return \Backpack\NewsCRUD\app\Models\Category::all()->keyBy('id')->pluck('name', 'id')->toArray();
//        }, function ($values) { // if the filter is active
//            foreach (json_decode($values) as $key => $value) {
//                $this->crud->addClause('orWhere', 'select2', $value);
//            }
//        });
//
//        $this->crud->addFilter([ // select2_ajax filter
//            'name' => 'select2_from_ajax',
//            'type' => 'select2_ajax',
//            'label' => 'Select2 Ajax',
//            'placeholder' => 'Pick an article',
//        ],
//            url('api/article-search'), // the ajax route
//            function ($value) { // if the filter is active
//                $this->crud->addClause('where', 'select2_from_ajax', $value);
//            });
//    }
}
