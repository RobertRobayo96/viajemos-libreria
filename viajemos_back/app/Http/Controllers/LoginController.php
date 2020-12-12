<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\DAO\LoginDAO;
use App\DAO\UserDAO;
use App\DAO\UserCompanyDAO;
class LoginController extends Controller
{
    public function __construct(){}

    public function login(Request $request)
    {
        //recibir datos
        $request = $request -> json() -> all();
        $data = array(
            'correo' => $request['email'],
            'contrasena' => $request['password'],
        );

        //Objeter clave
        $dao = new LoginDAO();
        $user = $dao -> getByemail($data['correo']);
        
        //Comparar encriptado
        if (password_verify($data['contrasena'], $user['contrasena'])) {
            
            return response()->json(['success'=>true,'message'=>'success', 'data' => $user], 200);
         }else{
            return response()->json(['message' => 'Login Fail, please check password'], 401);

         }

         
           
        
    }
}