<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Contracts\View\View;

class PdfController extends Controller
{
    public function html(): View
    {
        return view('pdf-report/html');
    }

    public function view(): View
    {
        return view('pdf-report/pdf');
    }

    public function download()
    {
        $pdf = Pdf::loadView('pdf-report/pdf');
        return $pdf->download('report.pdf');
    }
}
