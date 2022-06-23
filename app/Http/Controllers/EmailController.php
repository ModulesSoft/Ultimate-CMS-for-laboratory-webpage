<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), ['email' => 'required|email', 'name' => 'required|string', 'message' => 'required|min:5']);
        if ($validator->fails()) {
            return $validator->errors();
        }
        $attributes = (object)($validator->validated());
        try {
            Mail::to(env('MAIL_CONTACT_FORM_TO_ADDRESS'))->send(new ContactMail($attributes));
            return response()->json(['message' => "Email Sent Successfully."], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
