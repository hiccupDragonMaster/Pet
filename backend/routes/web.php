<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\PdfController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [IndexController::class, 'index']);
Route::get('/html', [PdfController::class, 'html']);
Route::get('/view', [PdfController::class, 'view']);
Route::get('/download', [PdfController::class, 'download']);
