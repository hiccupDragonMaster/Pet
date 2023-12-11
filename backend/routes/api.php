<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/login', 'App\Http\Controllers\API\AuthController@login');
Route::post('/register', 'App\Http\Controllers\API\AuthController@register');
Route::post('/searchClient', 'App\Http\Controllers\ClientController@searchClient');

Route::post('/addNewPet', 'App\Http\Controllers\PetController@addNewPet');
Route::post('/selectedClientPet', 'App\Http\Controllers\PetController@selectedClientPet');



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->post('/logout', 'App\Http\Controllers\API\AuthController@logout');
Route::middleware('auth:sanctum')->get('/user', 'App\Http\Controllers\API\UserController@show');
Route::middleware('auth:sanctum')->get('/addClient', 'App\Http\Controllers\API\ClientController@addClient');

Route::middleware('auth:sanctum')->post('/getGender', 'App\Http\Controllers\ItemController@getGender');
Route::middleware('auth:sanctum')->post('/getAge', 'App\Http\Controllers\ItemController@getAge');
Route::middleware('auth:sanctum')->post('/getSize', 'App\Http\Controllers\ItemController@getSize');
Route::middleware('auth:sanctum')->post('/getBreed', 'App\Http\Controllers\ItemController@getBreed');