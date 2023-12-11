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

<div class="overflow-hidden">
    <!-- Layout Content -->
    <div class="container">
        <div class="d-flex py-5 flex-wrap justify-content-between w-100">
            <h3 class="m-0 py-2">Dental Report</h3>
            <img src="theme/img/logo-full.png" width="160" alt="logo">
        </div>
    </div>

    <div class="row bg-light ">
        <div class="col-12">
            <div class="container">
                <div class="row col-12 py-5">
                    <div class="col-12 col-md-8 mt-3">
                        <div class="flex-column py-3">
                            <div class="sub-title">Archer <span class="badge bg-primary">Dog</span></div>
                            <div class="grey-500">Calico . Small</div>
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class="col-12 py-3 col-md-6">
                                <div class="grey-500">Appointment date</div>
                                <div class="sub-title">10/16/2023</div>
                            </div>
                            <div class="col-12 py-3 col-md-6">
                                <div class="grey-500">Next recommended visit</div>
                                <div class="sub-title">04/16/2023</div>
                            </div>

                        </div>
                        <div class="flex-column">
                            <div class="grey-500">Staff</div>
                            <div class="gap-1">
                                <span class="badge m-1 bg-grey-400">Mia Gregor</span>
                                <span class="badge m-1 bg-grey-400">Jane Woods</span>
                                <span class="badge m-1 bg-grey-400">Nancy Edward</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mt-3">
                        <div class="flex-column">
                            <div class="grey-500">
                                Before & After
                            </div>
                            <div class="img mt-2">
                                <img src="theme/img/frame-19.png" alt="img">
                            </div>
                            <div class="img mt-2">
                                <img src="theme/img/frame-20.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row col-12 py-4">
            <div class="col-12 col-md-9 mt-4">
                <div class="flex-column mt-4">
                    <div class="grey-500">Procedure record</div>
                    <div class="d-flex py-3 column-gap-4 row-gap-3  flex-wrap">
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Polished scale</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Polished</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Oral rinse</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Routine</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Extended</span>
                        </div>
                    </div>

                </div>

                <hr class="hr me-5"/>

                <div class="flex-column mt-4">
                    <div class="grey-500">Oral hygiene levels</div>
                    <div class="d-flex py-3 column-gap-4 row-gap-3  flex-wrap">
                        <div class="flex-column">
                            <div class="sub-title">Calculus</div>
                            <div class="d-flex align-items-center">
                                <div class="circle circle-lg active">1</div>
                                <div class="circle circle-lg">2</div>
                                <div class="circle circle-lg">3</div>
                            </div>
                        </div>
                        <div class="flex-column">
                            <div class="sub-title">Plaque</div>
                            <div class="d-flex align-items-center">
                                <div class="circle circle-lg">1</div>
                                <div class="circle circle-lg active">2</div>
                                <div class="circle circle-lg">3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="hr me-5"/>

                <div class="flex-column mt-4">
                    <div class="grey-500">Tooth abnormalities</div>
                    <div class="sub-title pt-3 ">Enamel defect</div>
                    <div class="d-flex py-1 column-gap-4 row-gap-3  flex-wrap">
                        <div class="gap-1">
                            <span class="badge m-1 text-black bg-grey-300">206</span>
                            <span class="badge m-1 text-black bg-grey-300">308</span>
                            <span class="badge m-1 text-black bg-grey-300">208</span>
                            <span class="badge m-1 text-black bg-grey-300">208</span>
                            <span class="badge m-1 text-black bg-grey-300">108</span>
                        </div>
                    </div>
                    <div class="sub-title pt-3 ">Ename stains</div>
                    <div class="d-flex py-1 column-gap-4 row-gap-3  flex-wrap">
                        <div class="gap-1">
                            <span class="badge m-1 text-black bg-grey-300">All teeth</span>
                        </div>
                    </div>
                    <div class="sub-title pt-3 ">Missing tooth</div>
                    <div class="d-flex py-1 column-gap-4 row-gap-3  flex-wrap">
                        <div class="gap-1">
                            <span class="badge m-1 text-black bg-grey-300">408</span>
                            <span class="badge m-1 text-black bg-grey-300">406</span>
                            <span class="badge m-1 text-black bg-grey-300">411</span>
                            <span class="badge m-1 text-black bg-grey-300">303</span>
                            <span class="badge m-1 text-black bg-grey-300">306</span>
                            <span class="badge m-1 text-black bg-grey-300">308</span>
                            <span class="badge m-1 text-black bg-grey-300">311</span>
                        </div>
                    </div>
                </div>

                <hr class="hr me-5"/>

                <div class="flex-column mt-4">
                    <div class="grey-500">Periodontal findings</div>
                    <div class="sub-title pt-3 ">No findings 🎉</div>
                </div>

                <hr class="hr me-5"/>
                <div class="flex-column mt-4">
                    <div class="grey-500">Homecare</div>
                    <div class="d-flex py-3 column-gap-4 row-gap-3  flex-wrap">
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Brushing</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Rising</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Dry food</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Soft food</span>
                        </div>
                    </div>
                </div>

                <hr class="hr me-5"/>

                <div class="flex-column mt-4">
                    <div class="grey-500">Recommendations</div>
                    <div class="d-flex py-3 column-gap-4 row-gap-3 flex-wrap">
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Vet evaluation</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle active"><i class="bi bi-check"></i></div>
                            <span class="sub-title">Anesthetic dental</span>
                        </div>
                    </div>
                </div>

                <hr class="hr me-5"/>

                <div class="flex-column mt-4">
                    <div class="grey-500">Additional notes</div>
                    <div class="pt-3 me-5">Archer is so sweet! She was a level one today for plaque and calculus.
                        Please see chart for further details. We recommend routine brushing and home care to keep her
                        smile shiny and bright! We will see her again in six months for another cleaning! Thank you and
                        have a great day!
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-3 mt-4">
                <div class="flex-column">
                    <div class="d-flex py-3 column-gap-4 row-gap-3 flex-wrap">
                        <div class="d-flex align-items-center">
                            <div class="box bg-lighted"></div>
                            <span class="text-sm">Incisors</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="box bg-primary"></div>
                            <span class="text-sm">Premolars</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="box bg-light-blue"></div>
                            <span class="text-sm">Canines</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="box bg-green"></div>
                            <span class="text-sm">Molars</span>
                        </div>
                    </div>
                    <div class="img mt-5">
                        <img src="theme/img/dog-chart.png" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="badge border-radius my-5 px-4 py-2 d-flex justify-content-between bg-primary w-100">
            <div>
                www.healthysmiles.pet
            </div>
            <div class="d-flex align-items-center">
                <img src="theme/img/instagram.png" width="16" alt="instagram">
                <span class="ms-1">healthysmiles.pet</span>
            </div>
        </div>
    </div>
</div>
</body>
</html>
