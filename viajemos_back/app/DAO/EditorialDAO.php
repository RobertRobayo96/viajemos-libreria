<?php

namespace App\Dao;
use App\Models\Editorial;

class EditorialDAO
{
    function listar(){
        return Editorial::where('eliminado', 0)->get();
    }

    function consultar($id){
        return Editorial::where('id', $id)->where('eliminado', 0)->first();
    }

    function insertar($data){
        return Editorial::insert($data);
    }

    function editar($id, $data){
        return Editorial::where('id', $id)->update($data);
    }

    function eliminar($id){
        return Editorial::where('id', $id)->update(['eliminado' => 1]);
    }
}