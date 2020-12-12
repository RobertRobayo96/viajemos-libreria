<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Libro;
use App\DAO\LibroDAO;

class LibroController extends Controller
{
    /**
     * Show all Libros.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function listar(){
    	$dao = new LibroDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }
    /**
     * Show the profile for the given Libro.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function consultar($id){
        
    	$dao = new LibroDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    public function insertar(Request $request){

        $data = array(        
            'editorial'=> $request['editorial'], 
            'titulo'=> $request['titulo'],
            'sinopsis'=> $request['sinopsis'],
            'n_paginas'=> $request['n_paginas'],
        );
            
        $dao2 = new LibroDAO();
        $res2 = $dao2 -> insertar($data);
        
        if($res2 == true)
        {
            return response() -> json($res2, 201);
        }else{
            
            return response() -> json($res, 400);
        }
        }

    public function editar(Request $request){
        $id = $request['id'];

        $data = array(
            'editorial'=> $request['editorial'], 
            'titulo'=> $request['titulo'],
            'sinopsis'=> $request['sinopsis'],
            'n_paginas'=> $request['n_paginas'],
        );
        $dao = new LibroDAO();
        $res = $dao -> editar($id, $data);
        if($res == true)
            return response() -> json($res, 201);
        else
            return response() -> json($res, 400);
    }

    public function eliminar($id){
        $dao = new LibroDAO();
        $res = $dao -> eliminar($id);
        if ($res == true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }

    /* public function getByPlate($plate)
    {
        $dao = new LibroDAO();
        $res = $dao -> getByPlate($plate);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json(["the plate number ".$plate ." is not on system"], 404);
        }
        
    } */
}