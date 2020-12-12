import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/services/general.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LibroService } from 'src/services/libro.service';
import { EditorialService } from 'src/services/editorial.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.scss']
})
export class EditarLibroComponent implements OnInit {

  constructor(

    private formBuilder :FormBuilder,
    private editorialService : EditorialService, 
    private libroService : LibroService,
    private router : Router,
    private route : ActivatedRoute,

    ){}

    public form : FormGroup;
    public editoriales : any ;
    public id : any;
    public libro : any = null;

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({
      editorial: ['', Validators.required],
      titulo: ['', Validators.required],
      sinopsis: ['', Validators.required],
      n_paginas: ['', Validators.required],
    }); 
    
  this.listarEditoriales();
   this.consultar();
  }
  
  consultar()
  {
    this.libroService.consultar(this.id).subscribe(
      response => {
        this.libro = response;
        console.log(this.libro);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  
  listarEditoriales() {
    this.editorialService.listar().subscribe(
      response => {
        this.editoriales = response;
        console.log(this.editoriales);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

 
  editar() {
 
    let data = {
      'id':this.id,
      'editorial':this.form.value.editorial,
      'titulo':this.form.value.titulo,
      'sinopsis':this.form.value.sinopsis,
      'n_paginas':this.form.value.n_paginas,
    };
    console.log(data)
     this.editorialService.editar(data).subscribe(
      response => {
        GeneralService.ABRIR_MENSAJE(response['message'], "success");
        this.router.navigate(['/editorial']);
      },
        error => {
          GeneralService.ABRIR_MENSAJE("Ha ocurrido un error", "error");
          console.log(<any>error);    
        }  
    );
  } 
}
