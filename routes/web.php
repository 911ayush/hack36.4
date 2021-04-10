<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/user', [Controller::class, 'index']);
Route::post('/fetchstate',[Controller::class, 'fetchstate']);
Route::post('/fetchdistrict',[Controller::class, 'fetchdistrict']);
Route::post('/fetchca',[Controller::class,'fetchca']);

