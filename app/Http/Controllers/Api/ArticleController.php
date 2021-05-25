<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Backpack\NewsCRUD\app\Models\Article;
use Backpack\NewsCRUD\app\Models\Category;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $search_term = $request->input('q');

        if ($search_term) {
            $results = Article::where('title', 'LIKE', '%'.$search_term.'%')->paginate(10);
        } else {
            $results = Article::paginate(10);
        }

        return $results;
    }

    public function search(Request $request)
    {
        $term = $request->input('term');
        $options = Article::where('title', 'like', '%'.$term.'%')->get()->pluck('title', 'id');

        return $options;
    }

    public function show($id)
    {
        return Article::find($id);
    }

    public function articleByCategory($slug)
    {
        $catIDs = Category::select('id')->where('slug', $slug)->get()[0]->id;
        return Article::where('category_id',$catIDs)->where('status','PUBLISHED')->orderBy('lft')->get();
    }
    public function getFeatured()
    {
        return Article::where('featured',1)->where('status','PUBLISHED')->orderBy('lft')->get();
    }
    public function footer()
    {
        $catIDs = Category::select('id')->where('slug', 'footer')->get()[0]->id;
        return Article::where('category_id',$catIDs)->where('status','PUBLISHED')->get();
    }
}
