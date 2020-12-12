<?php

namespace App\Dao;
use App\Models\AutorLibro;

class AutorLibroDAO
{
    function listar(){
        return AutorLibro::where('eliminado', 0)->get();
    }

    function listarPorLibro($libro){
        return AutorLibro::where('eliminado', 0)->where('libro', $libro)->with('autor')->get();
    }

    function listarPorAutor($autor){
        return AutorLibro::where('eliminado', 0)->where('autor', $autor)->with('libro')->get();
    }

    function consultar($id){
        return AutorLibro::where('id', $id)->where('eliminado', 0)->first();
    }

    function insertar($data){
        return AutorLibro::insert($data);
    }

    function editar($id, $data){
        return AutorLibro::where('id', $id)->update($data);
    }

    function eliminar($id){
        return AutorLibro::where('id', $id)->update(['deleted' => 1]);
    }
}