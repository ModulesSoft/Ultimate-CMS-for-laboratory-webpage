<!DOCTYPE html>
<html>
<head>
    <title>Biological fluid dynamics research laboratory</title>
    <link rel="stylesheet" href="{{asset('css/w3.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/adminlte/bower_components/font-awesome/css/font-awesome.min.css') }}">
    <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>

    <script src="{{asset('vendor/adminlte/bower_components/bootstrap/dist/js/jquery-3.4.1.slim.min.js') }}"></script>
    <script src="{{asset('vendor/adminlte/bower_components/bootstrap/dist/js/bootstrap.front.min.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('vendor/adminlte/bower_components/bootstrap/dist/css/bootstrap.front.min.css') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148923392-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-148923392-1');
    </script>
</head>
<style>
    img{
        max-width: 100% !important;
    }
    img[lazy=loading] {
        background-image: url("{{asset('images/loading.gif')}}")  !important;
        background-repeat: no-repeat;
    }
    img[lazy=error] {
        background-image: url("{{asset('images/no-image.png')}}")  !important;
        background-repeat: no-repeat;
    }
    /*debug carousel firefox*/
    .VueCarousel-slide-adjustableHeight {
        display: block !important;
        max-height: 400px;
    }
    .VueCarousel-inner {
        align-items: flex-start !important;
    }
    /**/
    .VueCarousel-dot {
        outline: none !important;
        border-radius: 0!important;
        width:20px!important;
        height:5px!important;
    }

    .VueCarousel-navigation-button {

    }

    .VueCarousel-navigation-prev {
        font-size: 0 !important;
        width: 32px;
        height: 32px;
        background-image: url("{{asset('images/left-arrow.png')}}")  !important;
        background-repeat: no-repeat !important;
        outline: none !important;
    }

    .VueCarousel-navigation-next {
        font-size: 0 !important;
        width: 32px;
        height: 32px;
        background-image: url("{{asset('images/right-arrow.png')}}") !important;
        background-repeat: no-repeat !important;
        outline: none !important;
    }

    @font-face {
        font-family: irsans;
        src: url("{{asset('fonts/irsans.ttf')}}");
    }
    @font-face {
        font-family: raleway;
        src: url("{{asset('fonts/Raleway-Regular.ttf')}}");
    }
    {{--@font-face {--}}
        {{--font-family: ralewayBold;--}}
        {{--src: url("{{asset('fonts/Raleway-Regular.ttf')}}");--}}
    {{--}--}}
    *,a,p,span,.panel-title , strong {
        font-family: irsans,raleway, sans-serif ;
        font-size: 1.01em!important;
        text-align: justify;
    }

    h4{
        font-family: irsans,raleway, sans-serif;
        font-size: 1.03em;
        line-height: 1.2;
    }
    h3 {
        font-family: irsans,raleway, sans-serif;
        font-size: 1.2em;
    }
    h2 {
        font-family: irsans,raleway, sans-serif;
        font-size: 1.3em;
    }
    a {
        font-family: irsans,raleway, sans-serif;
        color: #009688;
    }
    @media screen and (max-width: 1000px) {

        /**,a, p, span, .panel-title , strong {*/
            /*font-size: 1.01em!important;*/
        /*}*/

        /*h4 {*/
            /*font-size: 1.1em;*/
        /*}*/

        /*h3 {*/
            /*font-size: 1.2em;*/
        /*}*/

        /*h2 {*/
            /*font-size: 1.25em;*/
        /*}*/
    }
</style>
<body>
<div id="app" class="container">
    <div class="row">
        <layout></layout>
    </div>
</div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>
