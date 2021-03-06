<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
//
//Route::group(['middleware'=> 'auth:api'], function(){
//    Route::apiResource('tasks', \App\Http\Controllers\API\TaskController::class);
//});
Route::apiResource('tasks', \App\Http\Controllers\API\TaskController::class, ['only' => ['index', 'store', 'destroy']]);

Route::put('tasks/bulk-mark', [\App\Http\Controllers\API\TaskController::class, 'bulkMarkAsCompleted']);
