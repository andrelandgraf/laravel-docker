<?php

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

Route::get('/pizza', function(){
    $pizzas = \App\Pizza::all();
    return view('/pizza/index')->with('pizzas', $pizzas);
});

Route::post('/pizza', function(){
    $pizzas = \App\Pizza::all();
    return view('/pizza/index')->with('pizzas', $pizzas);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
