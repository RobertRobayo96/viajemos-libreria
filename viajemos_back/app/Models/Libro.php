<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Libro extends Model
{
    
    protected $table = 'libros';
    protected $fillable = [
        'id',
        'editorial', 
        'titulo',
        'sinopsis',
        'n_paginas',
        'eliminado'
    ];

    protected $primaryKey = 'id';

    public $timestamps = false;

    public function editorial()
    {
        return $this->belongsTo(Editorial::class, 'editorial');
    }

}
