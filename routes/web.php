<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\ProviderController;
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

Route::resource('customer',CustomersController::class);


Route::get('providers',[ProviderController::class,'index']);

Route::get('providers/show/',[ProviderController::class,'show']);
// Route::get('customer/index',array('customer'=>'CustomersController@index'))
