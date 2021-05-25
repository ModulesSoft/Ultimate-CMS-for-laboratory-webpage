<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function getSlides()
    {
        $slides = array(
            array("bannerURL" => "http://wowslider.com/sliders/demo-6/data/images/greenmountain.jpg", "bannerLink" => "#"),
            array("bannerURL" => "http://wowslider.com/sliders/demo-42/data1/images/lighthouse.jpg", "bannerLink" => "#"),
            array("bannerURL" => "http://wowslider.com/sliders/demo-37/data1/images/mountainlandscape.jpg", "bannerLink" => "#"),
        );
        return $slides;
    }

}
