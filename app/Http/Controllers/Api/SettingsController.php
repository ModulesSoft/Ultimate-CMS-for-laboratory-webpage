<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Backpack\settings\app\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{

    public function getMotto()
    {
        return Setting::where('key', 'motto')->get();
    }

    public function getSubMotto()
    {
        return Setting::where('key', 'subMotto')->get();
    }

    public function getEmail()
    {
        return Setting::where('key', 'contact_email')->get();
    }

    public function getPhone()
    {
        return Setting::where('key', 'contact_phone')->get();
    }

    public function getAddress()
    {
        return Setting::where('key', 'contact_address')->get();
    }

    public function getSubstringCharsNumber()
    {
        return Setting::where('key', 'substring_chars_number')->get();
    }
}
