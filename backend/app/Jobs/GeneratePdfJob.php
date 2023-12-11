<?php

namespace App\Jobs;


use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class GeneratePdfJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle()
    {
        try {
            $pdf = PDF::loadView('index');
            $pdfContents = $pdf->output();
            $filename = 'report.pdf';

            Storage::put($filename, $pdfContents);

            info('PDF saved successfully: ' . $filename);
        } catch (\Exception $e) {
            info('Error saving PDF: ' . $e->getMessage());
        }
    }
}

