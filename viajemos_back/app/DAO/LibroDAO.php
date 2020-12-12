<?php

namespace App\Dao;
use App\Models\Libro;

class LibroDAO
{
    function listar()
    {
        return Libro::where('eliminado', 0)->with('editorial')->get();
    }

    function consultar($id)
    {
        return Libro::where('id', $id)->where('eliminado', 0)->with('editorial')->first();
    }

    function insertar($data)
    {
        return Libro::insert($data);
    }

    function editar($id, $data)
    {
        return Libro::where('id', $id)->update($data);
    }

    function eliminar($id)
    {
        return Libro::where('id', $id)->update(['deleted' => 1]);
    }
}