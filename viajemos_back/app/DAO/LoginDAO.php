<?php

namespace App\DAO;
use App\Models\Usuario;

class LoginDAO
{  
    //Consultar informacion de un usuario
    public function login($data)
    {   
        return Usuario::
            where('correo', $data['email'])
            -> where('contrasena', $data['password'])
            -> first();
    }

    public function getByEmail($email)
    {
        return Usuario::
            where('correo', $email)
            -> first();
    }
}
