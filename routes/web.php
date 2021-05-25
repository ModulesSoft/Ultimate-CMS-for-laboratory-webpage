<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
//Route::get('/clear-cache', function() {
//    $exitCode = Artisan::call('config:clear');
//    $exitCode = Artisan::call('cache:clear');
//    $exitCode = Artisan::call('config:cache');
//    return 'DONE'; //Return anything
//});
Route::get('/sitemap', function()
{
    return Response::view('sitemap')->header('Content-Type', 'application/xml');
});
Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');
