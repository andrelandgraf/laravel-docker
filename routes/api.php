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
    return App\Pizza::create($request->all());
});

Route::get('/pizza', function(Request $request){
    return App\Pizza::all()->toArray();
});

/**
 * we name the parameter pizza, so that laravel automatically tries to find the object for us
 * using {id} instead would give us the actually id parameter that comes from the frontend
 */
Route::delete('/pizza/{pizza}', function(App\Pizza $pizza){
    $deleted = $pizza->delete();
    if($deleted)
        return response()->json(['message' => 'Deleted'], 200);
    else
        abort(404);
});

