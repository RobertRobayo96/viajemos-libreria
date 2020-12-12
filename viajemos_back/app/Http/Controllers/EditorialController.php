<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Editorial;
use App\DAO\EditorialDAO;

class EditorialController extends Controller
{
    /**
     * Show all Editorials.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function listar(){
    	$dao = new EditorialDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }
    /**
     * Show the profile for the given Editorial.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function consultar($id){
        
    	$dao = new EditorialDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    public function insertar(Request $request){

        $data = array(        
            'nombre' => $request['nombre'],
            'sede' => $request['sede'], 
        );
        
        $dao = new EditorialDAO();
        $res = $dao -> insertar($data);
        if($res == true)
            return response() -> json($res, 201);
        else
            return response() -> json($res, 400);
    }

    public function editar(Request $request){
        $id = $request['id'];
        $data = array(
            'nombre' => $request['nombre'],
            'sede' => $request['sede'], 
        );
        $dao = new EditorialDAO();
        $res = $dao -> editar($id, $data);
        if($res == true)
            return response() -> json($res, 201);
        else
            return response() -> json($res, 400);
    }

    public function eliminar($id){
        $dao = new EditorialDAO();
        $res = $dao -> eliminar($id);
        if ($res == true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }
}