import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/services/general.service';
import { LibroService } from 'src/services/libro.service';
import { EditorialService } from 'src/services/editorial.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.scss']
})
export class AgregarLibroComponent implements OnInit {

  constructor(
    private generalService : GeneralService,
    private formBuilder: FormBuilder,
    private router : Router,
    private libroService : LibroService,
    private editorialService:EditorialService

  ) {}
  public user:any= [];
  public editoriales : any = [];
  public idUser: any ;
  public form : FormGroup;
  public loginstatus  = localStorage.getItem("loginstatus");

  ngOnInit() 
  {
    this.listarEditoriales();

    this.form = this.formBuilder.group({
      editorial: ['', Validators.required],
      titulo: ['', Validators.required],
      sinopsis: ['', Validators.required],
      n_paginas: ['', Validators.required],
    });
  }

  listarEditoriales()
  {
    this.editorialService.listar().subscribe(
      response => {
        this.editoriales = response;
        console.log(this.editoriales)
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  insert()
  {
    let data =
    {
      'editorial':this.form.value.editorial,
      'titulo':this.form.value.titulo,
      'sinopsis':this.form.value.sinopsis,
      'n_paginas':this.form.value.n_paginas,
    }

    console.log(data);
    this.libroService.insertar(data).subscribe(
  		response => {

        GeneralService.ABRIR_MENSAJE(response['message'], "success");
        this.router.navigate(['/libro']);
      
      },
  		error => {
        if(error.status = 400)
        {
          this.generalService.abrirMensaje(error['error'], "error");
        }else{
          console.log(<any>error);
        }
        
  		}
    );
  }


 
}
