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
        Route::get('/articles', fn () => QueryBuilder::for(Article::class)->with('category')
            ->allowedFilters(['title', 'slug', 'featured', 'status', 'category_id', 'tags.keyword'])
            ->orderBy('lft')->with('tags')->get());
        Route::get('/slides', fn () => QueryBuilder::for(Slideshow::class)
            ->orderBy('lft')->get());
        Route::get('/galleries', fn () => QueryBuilder::for(Gallery::class)
            ->orderBy('lft')->get());
        Route::get('/pages', fn () => QueryBuilder::for(Page::class::orderBy('lft')->with(['sections.tags', 'sections' => fn ($q) => $q->where('status', 'PUBLISHED')->orderBy('lft')]))
            ->allowedFilters(['slug'])->get());
        Route::get('/categories', fn () => QueryBuilder::for(Category::class)
            ->orderBy('lft')->allowedFilters(['slug'])->get());
        Route::get('/settings', fn () => QueryBuilder::for(Setting::class)
            ->allowedFilters(['key'])->first());
        Route::get(
            '/students/profiles',
            fn () => QueryBuilder::for(
                Profile::whereHas('user', function ($query1) {
                    $query1->whereHas('roles', function ($query2) {
                        $supervisor_roles = config('role.supervisors');
                        array_push($supervisor_roles, 'admin');
                        $query2->whereNotIn('name', $supervisor_roles);
                    });
                })->with('user.roles', 'supervisors', 'tags')
            )->allowedFilters(['status', 'user.roles.id', 'user.roles.name', 'tags.keyword'])->orderBy('lft')->get()
        );
        Route::get(
            '/faculty/profiles',
            fn () => QueryBuilder::for(
                Profile::whereHas('user', function ($query1) {
                    $query1->whereHas('roles', function ($query2) {
                        $supervisor_roles = config('role.supervisors');
                        $query2->whereIn('name', $supervisor_roles);
                    });
                })->with('user.roles', 'supervisors', 'tags')
            )->allowedFilters(['status', 'user.roles.id', 'user.roles.name', 'tags.keyword'])->orderBy('lft')->get()
        );
        Route::get('/roles', fn () => Role::where('name', '!=', 'admin')->get());
        Route::get('/users/{name}/profile', fn ($name) => User::where('name', 'like', "%" . $name . "%")->first()->profile()->with('user.roles', 'supervisors', 'tags')->first())->where('name', '[a-zA-Z][a-zA-Z .]+');
        Route::get('/footer/columns/', fn () => FooterColumn::orderBy('lft')->get());
        Route::get('/footer/columns/{id}/rows', fn ($id) => FooterRow::orderBy('lft')->where('column_id', $id)->get())->whereNumber('id');
        // Footer All at once
        Route::get('/footers', fn () => FooterColumn::class::orderBy('lft')->with('rows', fn ($q) => $q->orderBy('lft'))->get());
        // Services
        Route::post('/sendMail', EmailController::class);
    }
);
