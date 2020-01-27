<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    {{-- Globel veriable Laravel to JavaScript --}}
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
            'baseUrl' => url('/'),
            'appName' => config('app.name'),
            'passport' => config('userdata.passport'),
            'lang' => [
                'general' => __('general'),
                'auth' => __('auth'),
                'message' => __('message'),
                'pagination' => __('pagination'),
                'passwords' => __('passwords'),
                'validation' => __('validation'),
            ],
        ]); ?>
    </script>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="userApp">
    <div id="loader" ref="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="lading"></div>
    </div>
    <router-view></router-view>
</div>
</body>
</html>
