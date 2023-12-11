<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"/>

    <title>Dental Report</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}"/>

    <!-- Include Styles -->
    <link rel="stylesheet" href="theme/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="theme/css/style.css"/>
    <style>

        @font-face {
            font-family: 'Inter';
            src: url({{ storage_path("fonts/Inter-SemiBold.ttf") }}) format("truetype");
            font-weight: 500;
            font-style: normal;
        }

        @font-face {
            font-family: 'Inter';
            src: url({{ storage_path("fonts/Inter-Regular.ttf") }}) format("truetype");
            font-weight: 400;
            font-style: normal;
        }

        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>

<body>

<div class="overflow-hidden d-flex vh-100 align-items-center justify-content-center">
        <h1>HealthySmiles</h1>
</div>
</body>
</html>
