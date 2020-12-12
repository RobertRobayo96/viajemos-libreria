<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Autor;
use App\DAO\AutorDAO;


class AutorController extends Controller
{
    /**
     * Show all Autors.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function listar(){
    	$dao = new AutorDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }
    /**
     * Show the profile for the given Autor.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function consultar($id){
        
    	$dao = new AutorDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    public function insertar(Request $request){

        $data = array(        
            'nombres'=> $request['nombres'],
            'apellidos'=> $request['apellidos'],
/*             'date_registry'=> date('Y-m-d H:i:s'), */
        );
        
        $dao = new AutorDAO();
        $res = $dao -> insertar($data);
        if($res == true)
        {
            return response() -> json($res2, 201);
        }else{
            return response() -> json($res, 400);
        }
            
    }

    public function editar(Request $request){
        $id = $request['id'];
        $data = array(
            'nombres'=> $request['nombres'],
            'apellidos'=> $request['apellidos'],
        );
        $dao = new AutorDAO();
        $res = $dao -> editar($id, $data);
        if($res == true)
            return response() -> json($res, 201);
        else
            return response() -> json($res, 400);
    }

    public function eliminar($id){
        $dao = new AutorDAO();
        $res = $dao -> eliminar($id);
        if ($res == true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }

    
}