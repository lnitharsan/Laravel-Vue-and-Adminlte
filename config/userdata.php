<?php
return [
    'storage' => [
        'profile_images' => 'public/profile',
        'horoscope' => 'public/horoscope',
    ],
    'passport' => [
        'client_id' => env('PASSPORT_CLIENT_ID', '2'),
        'client_secret' => env('PASSPORT_CLIENT_SECRET', 'BZNiBIP2URmUXScz7xihqqVqjfNpKSU6Tnl2wAmW'),
    ]
];