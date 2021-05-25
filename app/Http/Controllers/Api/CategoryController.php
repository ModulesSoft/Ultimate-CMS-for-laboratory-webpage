<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Backpack\NewsCRUD\app\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function getCategories()
    {
        return Category::select('slug','name','icon')->orderBy('lft')->get();
    }
    public function category($slug)
    {
        return Category::where('slug',$slug)->get();
    }
}
