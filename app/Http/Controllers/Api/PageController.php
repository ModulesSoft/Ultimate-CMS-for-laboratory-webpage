<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Backpack\PageManager\app\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{

    public function getPages()
    {
        return Page::select('slug','title','template')->get();
    }
    public function page($slug)
    {
        return Page::where('slug',$slug)->get();
    }
}
