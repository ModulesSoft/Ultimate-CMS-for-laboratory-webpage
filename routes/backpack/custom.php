<?php

use Illuminate\Support\Facades\Route;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin')
    ),
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::crud('article', 'ArticleCrudController');
    Route::crud('category', 'CategoryCrudController');
    Route::crud('footer-column', 'FooterColumnCrudController');
    Route::crud('footer-row', 'FooterRowCrudController');
    Route::crud('gallery', 'GalleryCrudController');
    Route::crud('page', 'PageCrudController');
    Route::crud('profile', 'ProfileCrudController');
    Route::crud('section', 'SectionCrudController');
    Route::crud('slideshow', 'SlideshowCrudController');
    Route::crud('tag', 'TagCrudController');
    Route::crud('user', 'UserCrudController');
    Route::crud('role', 'RoleCrudController');
    Route::crud('permission', 'PermissionCrudController');
    Route::crud('setting', 'SettingCrudController');
}); // this should be the absolute last line of this file