<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Backpack\settings\app\Models\Setting;
use Request;

class mailController extends Controller
{
    private function checkRecaptcha($token)
    {
        $gRecaptcha = $token;
        $secret = "6Lcg6rcUAAAAACZ7tuZfFCythsAM9NJ2Jeg0JZ4U";
        $URI = "https://www.google.com/recaptcha/api/siteverify";
        $response = file_get_contents($URI . '?secret=' . $secret . '&response=' . $gRecaptcha);
        $response = json_decode($response, true);
        if (intval($response["success"]) !== 1) {
            return false;
        } else {
            return true;
        }
    }
    public function sendMail(Request $request)
    {
        if (!$this->checkRecaptcha($request::get('recaptchaToken'))) {
            return 'nok2';
        }
        $email = $request::get('email');
        $message = $request::get('message');
        $name = $request::get('name');
        $to = Setting::where('key', 'contact_email')->get()[0]->value . '';
        $cc = Setting::where('key', 'contact_cc')->get()[0]->value . '';
//        $bcc = Setting::where('key', 'contact_bcc')->get()[0]->value . '';
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return "nok0";
        } else {
            if (!isset($message) || !isset($name)) {
                return "nok1";
            } else {
                try {
                    if ($cc == '') {
                        Mail::send([], [], function ($msg) use ( $cc, $email, $message, $name, $to) {
                            $msg->to($to)
                                ->subject('Biofluids lab website mail: ' . $name)
                                ->setBody($message);
                        });
                    } else {
                        Mail::send([], [], function ($msg) use ( $cc, $email, $message, $name, $to) {
                            $msg->to($to)
                                ->subject('Biofluids lab website mail: ' . $name)
                                ->cc($cc)
                                ->setBody($message);
                            // or:
//                        ->setBody('<h1>Hi, welcome user!</h1>', 'text/html'); // for HTML rich messages

                        });
                    }
                    return 'ok';
                } catch (Exception $e) {
                    return $e;
                }

            }
        }
    }
}