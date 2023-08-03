<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@vite(['resources/js/app.js' , 'resources/css/app.css'])

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CV DFD</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
</head>

<body class="bg-zinc-600 ">
    <div class="container-fluid flex flex-row">
        <div style="width:75px;" class=""></div>
        <!-- bg-amber-200 -- Color of the background in the normall mode // rgb(187, 142, 81) -- color of the Homepage -->
        <div id="body" style="background-color:rgb(187, 142, 81);" class=" w-full min-h-screen rounded-xl shadow-xl p-5 shadow-gray-300">
            Hola
        </div>
        <div id="navbar" class="flex flex-col align-middle justify-start content-start min-h-screen"></div>
    </div>
</body>

</html>