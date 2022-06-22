<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $validator = Validator::make($request->all(), ['email' => 'required|email', 'name' => 'required|string', 'message' => 'required|min:5']);
        if ($validator->fails()) {
            return $validator->errors();
        }
        $attributes = (object)($validator->validated());
        try {
            Mail::to('majhool.yf@gmail.com')->send(new ContactMail($attributes));
            return 'done?!';
        } catch (Exception $e) {
            return $e;
        }

        // return ($request);
    }
}
