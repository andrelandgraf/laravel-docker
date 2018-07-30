<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * pizza api to add and delete pizzas
 * see routes/web.php for /pizzas web content
 */
Route::post('/pizza', function(Request $request){
    $pizza = $request->getContent();
    echo $pizza;
});