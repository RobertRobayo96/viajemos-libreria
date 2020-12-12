<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Autor extends Model
{
    
    protected $table = 'autores';
    protected $fillable = [
        'id',
        'nombres',
        'apellidos',
        'eliminado'
    ];

    protected $primaryKey = 'id';

    public $timestamps = false;

    

}
