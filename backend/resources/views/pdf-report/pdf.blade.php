<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dental Report</title>
    <style>
        body {
            font-size: 1rem;
            font-family: Inter, Arial, sans-serif;
        }

        .bg-primary {
            background-color: #44b9cb !important;
        }

        .bg-grey-400 {
            background-color: #9ca3af;
        }

        .box {
            margin-right: 0.5rem;
            width: 18px;
            height: 18px;
            border: 1px solid #f9fafb;
            border-radius: 5px;
        }

        .circle {
            margin-right: .5rem;
            width: 22px;
            height: 22px;
            border: 1px solid #f9fafb;
            border-radius: 50%;
            font-size: 1rem;
            vertical-align: top;
            text-align: center;
            background: #edeff6;
            color: #9ca3af;
        }

        .bg-grey-200 {
            background: #edeff6;
        }

        .main-title {
            font-size: 1.5rem;
            font-weight: 500;
            color: black;
        }

        .sub-title {
            font-size: 1rem;
            font-weight: 500;
            color: black;
        }

        .bg-green {
            background: #B2E364;
        }

        .bg-lighted {
            background: #e7f8fb;
        }

        .bg-light-blue {
            background: #b4e3ea;
        }

        .btn-sm {
            border-radius: 5px;
        }

        .grey-400 {
            color: #9ca3af;
        }

        .grey-300 {
            color: #f9fafb;
        }

        .bg-grey-300 {
            background: #f8f9fa;
        }

        .grey-500 {
            color: #6b7280;
        }

        .bg-grey-500 {
            background-color: #9ca3af;
        }

        .border-radius {
            border-radius: 1rem !important;
        }

        .text-sm {
            font-size: .75rem;
        }

        .text-small {
            font-size: .85rem;
        }

        .badge {
            margin-left: 8px;
            padding: 3px 8px;
            border-radius: 5px;
            font-size: .9rem;
            display: inline-block;
            color: white;
            text-align: center;
            vertical-align: top;
        }

        .circle-lg {
            width: 28px !important;
            height: 28px !important;
            font-size: 16px !important;
            line-height: 30px !important;
        }

        .active {
            background: #44b9cb !important;
            color: #fff !important;
        }

        h4 {
            margin: 0;
        }

        .w-full {
            width: 100%;
        }

        .w-half {
            width: 50%;
        }

        .w-40 {
            width: 40%;
        }

        .w-30 {
            width: 30%;
        }

        .w-60 {
            width: 60%;
        }

        .w-70 {
            width: 70%;
        }

        .w-90 {
            width: 82%;
        }

        .text-left {
            text-align: left;
        }

        .text-right {
            text-align: right;
        }

        .margin-top {
            margin-top: 1.25rem;
        }

        .footer {
            bottom: 20px;
            position: fixed;
        }

        table {
            width: 100%;
            border-spacing: 0;
        }

        .py-5 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .my-4 {
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        .py-4 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .py-3 {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
        }

        .mx-5 {
            margin-left: 2rem;
            margin-right: 2rem;
        }

        .mx-6 {
            margin-left: 3rem;
            margin-right: 3rem;
        }

        .px-5 {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .mx-3 {
            margin-left: 1.25rem;
            margin-right: 1.25rem;
        }

        .mx-4 {
            margin-left: 1.5rem;
            margin-right: 1.5rem;
        }

        .px-4 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .ms-4 {
            margin-left: 1.5rem;
        }

        .me-4 {
            margin-right: 1.5rem;
        }

        .mt-3 {
            margin-top: 1rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }
        .mt-1 {
            margin-top: 0.15rem;
        }

        .vertical-top {
            vertical-align: top !important;
        }

        .hr {
            width: 90%;
            height: 1px;
            background: #9ca3af;
            opacity: .25;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .w-10 {
            width: 10%;
        }

        .text-black {
            color: #000;
        }

        .mt-4 {
            margin-top: 1.5rem;
        }

        .mt-5 {
            margin-top: 2rem;
        }

        .page-break {
            page-break-after: always;
        }

        @page {
            margin: 0;
        }

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

        .ml-0 {
            margin-left: 0 !important;
        }

    </style>
</head>
<body>

<div class="mx-3">
    <table class="margin-top w-full">
        <tr>
            <td class="w-half">
                <div class="main-title ms-4">Dental Report</div>
            </td>
            <td class="w-half text-right">
                <img class=" me-4" src="theme/img/logo-full.png" width="140" alt="logo">
            </td>
        </tr>
    </table>
</div>
<div class="margin-top px-4 py-3 bg-grey-300">
    <table class="mx-3 w-100">
        <tr>
            <td class="w-60">
                <table class="w-100">
                    <tr>
                        <td class="w-50">
                            <div class="sub-title">Archer
                                <div class="badge bg-primary vertical-top">Dog</div>
                            </div>
                            <div class="grey-500 mt-1">Calico . Small</div>
                        </td>
                    </tr>
                    <tr class="mt-3">
                        <td class="w-50">
                            <div class="grey-500 mt-3">Appointment date</div>
                            <div class="sub-title">10/16/2023</div>
                        </td>
                        <td class="w-50">
                            <div class="grey-500 mt-3">Next recommended visit</div>
                            <div class="sub-title">04/16/2023</div>
                        </td>
                    </tr>
                </table>
                <table class="mt-3">
                    <tr>
                        <td class="w-60">
                            <div class="grey-500">Staff</div>
                            <div class="gap-1 mt-2">
                                <span class="ml-0 badge m-1 bg-grey-400">Mia Gregor</span>
                                <span class="badge m-1 bg-grey-400">Jane Woods</span>
                                <span class="badge m-1 bg-grey-400">Nancy Edward</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
            <td class="w-40">
                <table class="mt-2">
                    <tr>
                        <td>
                            <div class="grey-500" style="margin-top: -10px">Before & After</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="img mt-2">
                                <img src="theme/img/frame-19.png" width="240" alt="img">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="img mt-2">
                                <img src="theme/img/frame-20.png" width="240" alt="img">
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>

<div class="mx-3 margin-top px-4 py-5">
    <table class="w-100">
        <tr>
            <td class="w-70">
                <table class="w-90">
                    <tr>
                        <td>
                            <div class="grey-500">Procedure record</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top ">Polished scale</span>
                            </div>
                        </td>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Polished</span>
                            </div>
                        </td>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Oral rinse</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Routine</span>
                            </div>
                        </td>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Extended</span>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="hr w-70"></div>
                <table class="mt-3 w-60">
                    <tr>
                        <td>
                            <div class="grey-500">Oral hygiene levels</div>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <div class="mt-2 sub-title">Calculus</div>
                            <table class="mt-2 w-10">
                                <tr>
                                    <td>
                                        <div class="circle circle-lg active">1</div>
                                    </td>
                                    <td>
                                        <div class="circle circle-lg">2</div>
                                    </td>
                                    <td>
                                        <div class="circle circle-lg">3</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <div class="mt-3 sub-title">Plaque</div>
                            <table class="mt-2 w-10">
                                <tr>
                                    <td>
                                        <div class="circle circle-lg">1</div>
                                    </td>
                                    <td>
                                        <div class="circle circle-lg active">2</div>
                                    </td>
                                    <td>
                                        <div class="circle circle-lg">3</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div class="hr w-70"></div>
                <table class="mt-3">
                    <tr>
                        <td>
                            <div class="grey-500">Tooth abnormalities</div>
                            <div class="sub-title mt-4 ">Enamel defect</div>
                            <div class="mt-2">
                                <span class="ml-0 badge text-black bg-grey-200">206</span>
                                <span class="badge text-black bg-grey-200">308</span>
                                <span class="badge text-black bg-grey-200">208</span>
                                <span class="badge text-black bg-grey-200">208</span>
                                <span class="badge text-black bg-grey-200">108</span>
                            </div>
                            <div class="sub-title mt-5 ">Ename stains</div>
                            <div class="mt-2">
                                <span class="ml-0 badge m-1 text-black bg-grey-200">All teeth</span>
                            </div>

                            <div class="sub-title mt-5 ">Missing tooth</div>
                            <div class="mt-2">
                                <span class="ml-0 badge text-black bg-grey-200">408</span>
                                <span class="badge text-black bg-grey-200">406</span>
                                <span class="badge text-black bg-grey-200">411</span>
                                <span class="badge text-black bg-grey-200">303</span>
                                <span class="badge text-black bg-grey-200">306</span>
                                <span class="badge text-black bg-grey-200">308</span>
                                <span class="badge text-black bg-grey-200">311</span>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="hr w-70"></div>
            </td>
            <td>
                <table class="w-30" style="margin-top: -60px">
                    <tr>
                        <td>
                            <div class="box bg-lighted"></div>
                        </td>
                        <td>
                            <div class="text-sm">Molars</div>
                        </td>
                        <td>
                            <div class="box ms-4 bg-primary"></div>
                        </td>
                        <td>
                            <div class="text-sm">Premolars</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="box mt-2 bg-light-blue"></div>
                        </td>
                        <td>
                            <div class="mt-2 text-sm">Canines</div>
                        </td>
                        <td>
                            <div class="box mt-2 ms-4 bg-green"></div>
                        </td>
                        <td>
                            <div class="text-sm mt-2">Molars</div>
                        </td>
                    </tr>
                </table>
                <table class="mt-3">
                    <tr>
                        <td>
                            <div class="img mt-2">
                                <img src="theme/img/dog-chart.jpg" width="220" alt="img">
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>

<div class="page-break"></div>

<div class="mx-3 px-4 py-5">
    <table class="w-70">
        <tr>
            <td>
                <table class="w-100">
                    <tr>
                        <td>
                            <div class="grey-500">Periodontal findings</div>
                            <div class="sub-title mt-3 ">No findings</div>
                        </td>
                    </tr>
                </table>
                <div class="hr w-70"></div>
                <div class="grey-500">Homecare</div>
                <table class="w-90">
                    <tr>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Brushing</span>
                            </div>
                        </td>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Rising</span>
                            </div>
                        </td>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Dry food</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Soft food</span>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="hr w-70"></div>
                <div class="grey-500">Recommendations</div>
                <table class="w-90">
                    <tr>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Vet evaluation</span>
                            </div>
                        </td>
                        <td>
                            <div class="mt-2">
                                <img src="theme/img/check.png" width="16" alt="check">
                                <span class="sub-title vertical-top">Anesthetic dental</span>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="hr w-70"></div>
                <table class="mt-3">
                    <tr>
                        <td>
                            <div class="grey-500">Additional notes</div>
                            <div class="text-small mt-2">Archer is so sweet! She was a level one today for plaque and
                                calculus.
                                Please see chart for further details. We recommend routine brushing and home care to
                                keep her
                                smile shiny and bright! We will see her again in six months for another cleaning! Thank
                                you and
                                have a great day!
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>

<div class="footer badge border-radius mx-6 px-4 bg-primary w-90">
    <table class="w-full">
        <tr>
            <td class="w-half">
                <div class="text-left">www.healthysmiles.pet</div>
            </td>
            <td class="w-half text-right">
                <img src="theme/img/instagram.png" width="12" alt="instagram">
                <span class="ms-1">healthysmiles.pet</span>
            </td>
        </tr>
    </table>
</div>
</body>
</html>