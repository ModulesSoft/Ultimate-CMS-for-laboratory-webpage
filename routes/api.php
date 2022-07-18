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
use App\Models\Gallery;
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
        Route::get('/galleries', fn () => QueryBuilder::for(Gallery::class)
            ->get());
        Route::get('/pages', fn () => QueryBuilder::for(Page::class::with('sections'))
            ->allowedFilters(['slug'])->get());
        Route::get('/categories', fn () => QueryBuilder::for(Category::class)
            ->orderBy('lft')->allowedFilters(['slug'])->get());
        Route::get('/settings', fn () => QueryBuilder::for(Setting::class)
            ->allowedFilters(['key'])->get());
        Route::get(
            '/students/profiles',
            fn () => QueryBuilder::for(
                Profile::whereHas('user', function ($query1) {
                    $query1->whereHas('roles', function ($query2) {
                        $supervisor_roles = explode(',', env('SUPERVISOR_ROLES'));
                        array_push($supervisor_roles, 'admin');
                        $query2->whereNotIn('name', $supervisor_roles);
                    });
                })->with('user.roles')
            )->allowedFilters(['user.roles.id', 'user.roles.name'])->orderBy('lft', 'asc')->get()
        );
        // Route::get('/students', fn () => QueryBuilder::for(
        //     User::whereHas('roles', function ($query) {
        //         $supervisor_roles = explode(',', env('SUPERVISOR_ROLES'));
        //         array_push($supervisor_roles, 'admin');
        //         $query->whereNotIn('name', $supervisor_roles);
        //     })->with(['profile.supervisors', 'roles'])
        // )->allowedFilters(['name', 'roles'])->get());
        Route::get('/roles', fn () => Role::where('name', '!=', 'admin')->get());
        Route::get('/users/{id}/profile', fn ($id) => User::findOrFail($id)->profile()->get())->whereNumber('id');
        Route::get('/footer/columns/', fn () => FooterColumn::all());
        Route::get('/footer/columns/{id}/rows', fn ($id) => FooterRow::where('column_id', $id)->get())->whereNumber('id');
        // Footer All at once
        Route::get('/footers', fn () => FooterColumn::class::with('rows')->get());

        // Services
        Route::post('/sendMail', EmailController::class);
    }
);
