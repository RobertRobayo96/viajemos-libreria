<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AutorLibro;
use App\DAO\AutorLibroDAO;

class AutorLibroController extends Controller
{
    /**
     * Show all AutorLibros.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function listar(){
    	$dao = new AutorLibroDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    public function listarPorAutor($autor){
    	$dao = new AutorLibroDAO();
        $res = $dao -> listarPorAutor($autor);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    public function listarPorLibro($libro){
    	$dao = new AutorLibroDAO();
        $res = $dao -> listarPorLibro($libro);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    /**
     * Show the profile for the given AutorLibro.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function consultar($id){
        
    	$dao = new AutorLibroDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    public function insertar(Request $request){

        $data = array(        
            'autor' => $request['autor'],
            'libro' => $request['libro'], 
        );
        
        $dao = new AutorLibroDAO();
        $res = $dao -> insertar($data);
        if($res == true)
            return response() -> json($res, 201);
        else
            return response() -> json($res, 400);
    }

    public function editar(Request $request){
        $id = $request['id'];
        $data = array(
            'autor' => $request['autor'],
            'libro' => $request['libro'], 
        );
        
        $dao = new AutorLibroDAO();
        $res = $dao -> editar($id,$data);
        if($res == true)
            return response() -> json($res, 201);
        else
            return response() -> json($res, 400);
    }

    public function eliminar($id){
        $dao = new AutorLibroDAO();
        $res = $dao -> eliminar($id);
        if ($res == true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }
}