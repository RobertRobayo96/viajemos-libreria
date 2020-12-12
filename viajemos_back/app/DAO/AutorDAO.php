<?php

namespace App\Dao;
use App\Models\Autor;

class AutorDAO
{
    function listar(){
        return Autor::where('eliminado', 0)->get();
    }

    function consultar($id){
        return Autor::where('id', $id)->where('eliminado', 0)->first();
    }

    function insertar($data){
        return Autor::insert($data);
    }

    function editar($id, $data){
        return Autor::where('id', $id)->update($data);
    }

    function eliminar($id){
        return Autor::where('id', $id)->update(['eliminado' => 1]);
    }
}