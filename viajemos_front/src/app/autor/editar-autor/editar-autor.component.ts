import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from 'src/services/libro.service';
import { AutorService } from 'src/services/autor.service';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.scss']
})
export class EditarAutorComponent implements OnInit {

  constructor(
    private generalService : GeneralService,
    private formBuilder: FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private autorService : AutorService

  ) {}
  public id : any;
  public user: any= [];
  public brands: any= [];
  public autor : any = [];
  public customers : any = [];
  public types : any = [];
  public document_types : any = [];
  public idUser: any ;
  public form : FormGroup;
  public loginstatus  = localStorage.getItem("loginstatus");

  ngOnInit() 
  {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAutor();
    this.form = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],

    });
  }

  getAutor()
  {
    this.autorService.consultar(this.id).subscribe(
      response => {
        this.autor = response;
        console.log(this.autor)
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
      'id': this.id,
      'nombres':this.form.value.nombres,
      'apellidos':this.form.value.apellidos,
    }

    console.log(data);
    this.autorService.editar(data).subscribe(
  		response => {

        GeneralService.ABRIR_MENSAJE(response['message'], "success");
        this.router.navigate(['/autor']);
      
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
