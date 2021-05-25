<?php

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::get('api/article', 'App\Http\Controllers\Api\ArticleController@index');
Route::get('api/article-search', 'App\Http\Controllers\Api\ArticleController@search');
Route::get('api/article/{id}', 'App\Http\Controllers\Api\ArticleController@show');
Route::get('api/articleByCategory/{slug}', 'App\Http\Controllers\Api\ArticleController@articleByCategory');
Route::get('api/getFeatured', 'App\Http\Controllers\Api\ArticleController@getFeatured');
Route::get('api/footer', 'App\Http\Controllers\Api\ArticleController@footer');



Route::get('api/getSlides', 'App\Http\Controllers\Api\HomeController@getSlides');

Route::get('api/getPages', 'App\Http\Controllers\Api\PageController@getPages');
Route::get('api/page/{slug}', 'App\Http\Controllers\Api\PageController@page');


Route::get('api/getCategories', 'App\Http\Controllers\Api\CategoryController@getCategories');
Route::get('api/category/{slug}', 'App\Http\Controllers\Api\CategoryController@category');

Route::get('api/getEmail', 'App\Http\Controllers\Api\SettingsController@getEmail');
Route::get('api/getPhone', 'App\Http\Controllers\Api\SettingsController@getPhone');
Route::get('api/getAddress', 'App\Http\Controllers\Api\SettingsController@getAddress');
Route::get('api/getMotto', 'App\Http\Controllers\Api\SettingsController@getMotto');
Route::get('api/getSubMotto', 'App\Http\Controllers\Api\SettingsController@getSubMotto');
Route::get('api/getSubstringCharsNumber', 'App\Http\Controllers\Api\SettingsController@getSubstringCharsNumber');

Route::post('api/sendMail', 'App\Http\Controllers\Api\MailController@sendMail');

Route::get('api/getStudents/{filter}', 'App\Http\Controllers\Api\MonsterController@getStudents');
Route::get('api/student/{name}', 'App\Http\Controllers\Api\MonsterController@student');

Route::get('student/{any}', function ($any) {
    return redirect('en/students/'.$any);
})->where('any', '.*');

Route::get('en/student/{any}', function ($any) {
    return view('welcome');
})->where('any', '.*');
Route::get('fa/student/{any}', function ($any) {
    return view('welcome');
})->where('any', '.*');

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => ['web', config('backpack.base.middleware_key', 'admin')],
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    // CRUD resources and other admin routes
    CRUD::resource('monster', 'MonsterCrudController');
    CRUD::resource('icon', 'IconCrudController');
    CRUD::resource('product', 'ProductCrudController');
}); // this should be the absolute last line of this file
