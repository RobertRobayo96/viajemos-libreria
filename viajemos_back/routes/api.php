<?php

use Illuminate\Http\Request;
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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 */
/* $router->group(array('prefix' => '/ws'), function() use ($router){  
 */
    Route::post('/login', ['uses' => 'LoginController@login']);

    Route::get('/autor/listar', ['uses' => 'AutorController@listar']);
    Route::get('/autor/consultar/{id}', ['uses' => 'AutorController@consultar']);
    Route::post('/autor/insertar', ['uses' => 'AutorController@insertar']);
    Route::put('/autor/editar', ['uses' => 'AutorController@editar']);
    Route::delete('/autor/eliminar/{id}', ['uses' => 'AutorController@eliminar']);
    
    Route::get('/libro/listar', ['uses' => 'LibroController@listar']);
    Route::get('/libro/consultar/{id}', ['uses' => 'LibroController@consultar']);
    Route::post('/libro/insertar', ['uses' => 'LibroController@insertar']);
    Route::put('/libro/editar', ['uses' => 'LibroController@editar']);
    Route::delete('/libro/eliminar/{id}', ['uses' => 'LibroController@eliminar']);
    
    Route::get('/editorial/listar', ['uses' => 'EditorialController@listar']);
    Route::get('/editorial/consultar/{id}', ['uses' => 'EditorialController@consultar']);
    Route::post('/editorial/insertar', ['uses' => 'EditorialController@insertar']);
    Route::put('/editorial/editar', ['uses' => 'EditorialController@editar']);
    Route::delete('/editorial/eliminar/{id}', ['uses' => 'EditorialController@eliminar']);

    Route::get('/autorlibro/listar', ['uses' => 'AutorLibroController@listar']);
    Route::get('/autorlibro/listarporautor/{id}', ['uses' => 'AutorLibroController@listarPorAutor']);
    Route::get('/autorlibro/listarporlibro/{id}', ['uses' => 'AutorLibroController@listarPorLibro']);
    Route::get('/autorlibro/consultar/{id}', ['uses' => 'AutorLibroController@consultar']);
    Route::post('/autorlibro/insertar', ['uses' => 'AutorLibroController@insertar']);
    Route::put('/autorlibro/editar', ['uses' => 'AutorLibroController@editar']);
    Route::delete('/autorlibro/eliminar/{id}', ['uses' => 'AutorLibroController@eliminar']);

    Route::get('/editorial/listar', ['uses' => 'EditorialController@listar']);
    Route::get('/editorial/consultar/{id}', ['uses' => 'EditorialController@consultar']);
    Route::post('/editorial/insertar', ['uses' => 'EditorialController@insertar']);
    Route::put('/editorial/editar', ['uses' => 'EditorialController@editar']);
    Route::delete('/editorial/eliminar/{id}', ['uses' => 'EditorialController@eliminar']);


/*  });   */