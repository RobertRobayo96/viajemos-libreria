<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Editorial extends Model
{
    
    protected $table = 'editoriales';
    protected $fillable = [
        'id',
        'nombre',
        'sede',
        'eliminado'
    ];

    protected $primaryKey = 'id';

    public $timestamps = false;

  /*   public function company()
    {
        return $this->belongsTo(Company::class, 'company');
    } */

}
