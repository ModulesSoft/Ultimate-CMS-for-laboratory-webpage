<?php

use App\Http\Controllers\EmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\QueryBuilder\QueryBuilder;
use App\Models\User;
use App\Models\Article;
use App\Models\Category;
use App\Models\FooterColumn;
use App\Models\FooterRow;
use App\Models\Page;
use App\Models\Profile;
use App\Models\Role;
use App\Models\Setting;
use App\Models\Slideshow;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(
    ['prefix' => "v1"],
    function () {
        Route::get('/users', fn () => QueryBuilder::for(User::class)
            ->allowedFilters(['name', 'email'])
            ->get());

        // Route::get('/articles/{id}',  fn ($id) => Article::findOrFail($id)->get())->whereNumber('id');

        Route::get('/articles', fn () => QueryBuilder::for(Article::class)
            ->allowedFilters(['title', 'slug', 'featured', 'status', 'category_id'])
            ->with('tags')->get());
        Route::get('/slides', fn () => QueryBuilder::for(Slideshow::class)
            ->get());
        Route::get('/pages', fn () => QueryBuilder::for(Page::class)
            ->get());
        Route::get('/categories', fn () => QueryBuilder::for(Category::class)
            ->orderBy('lft')->allowedFilters(['slug'])->get());
        Route::get('/settings', fn () => QueryBuilder::for(Setting::class)
            ->allowedFilters(['key'])->get());
        Route::get('/students', fn () => QueryBuilder::for(
            User::whereHas('roles', function ($query) {
                $supervisor_roles = explode(',', env('SUPERVISOR_ROLES'));
                array_push($supervisor_roles, 'admin');
                $query->whereNotIn('name', $supervisor_roles);
            })->with('profile')
        )->allowedFilters(['name', 'role'])->get());
        Route::get('/roles', fn () => Role::where('name', '!=', 'admin')->get());
        Route::get('users/{id}/profile', fn ($id) => User::findOrFail($id)->profile()->get())->whereNumber('id');
        Route::get('/footer/columns/', fn () => FooterColumn::all());
        Route::get('/footer/columns/{id}/rows', fn ($id) => FooterRow::where('column_id', $id)->get())->whereNumber('id');
        // Services
        Route::post('/sendMail', EmailController::class);
    }
);
