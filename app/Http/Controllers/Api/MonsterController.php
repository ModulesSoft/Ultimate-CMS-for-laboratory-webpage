<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Monster;
use Illuminate\Http\Request;

class MonsterController extends Controller
{

    public function getStudents($filter)
    {
        if ($filter == 'alumni') {
            return Monster::select('id', 'name', 'research_title', 'research_text', 'role', 'supervisor', 'image')->where('role', 'like' ,'%raduate%')->where('status', '1')->orderBy('lft')->get();
        } elseif($filter == 'postdoc') {
            return Monster::select('id', 'name', 'research_title', 'research_text', 'role', 'supervisor', 'image')->where('role', 'like' ,'%doc%')->where('status', '1')->orderBy('lft')->get();
        }else {
            return Monster::select('id', 'name', 'research_title', 'research_text', 'role', 'supervisor', 'image')->where('role', 'not like' ,'%raduate%')->where('role', 'not like' ,'%doc%')->where('status', '1')->orderBy('lft')->get();
        }
    }

    public function student($name)
    {
        $students = Monster::where('status', '1')->get();
        foreach ($students as $student) {
            if ($student->name == $name) {
                return $student;
            }
        }
        return 'nok';
    }
}
