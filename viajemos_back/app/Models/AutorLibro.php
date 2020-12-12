<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class AutorLibro extends Model
{
    
    protected $table = 'autores_has_libros';
    protected $fillable = [
        'id',
        'autor',
        'libro',
        'eliminado'
    ];

    protected $primaryKey = 'id';

    public $timestamps = false;

    public function autor()
    {
        return $this->belongsTo(Autor::class, 'autor');
    }

    public function libro()
    {
        return $this->belongsTo(Libro::class, 'libro');
    }
}
