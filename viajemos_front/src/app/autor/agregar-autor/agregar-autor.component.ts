import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { Router } from '@angular/router';
import { AutorService } from 'src/services/autor.service';

@Component({
  selector: 'app-agregar-autor',
  templateUrl: './agregar-autor.component.html',
  styleUrls: ['./agregar-autor.component.scss']
})
export class AgregarAutorComponent implements OnInit {

  constructor(
    private generalService : GeneralService,
    private formBuilder: FormBuilder,
    private router : Router,
    private autorService : AutorService,

  ) {}
  public user: any= [];
  public brands: any= [];
  public customers : any = [];
  public types : any = [];
  public document_types : any = [];
  public idUser: any ;
  public form : FormGroup;
  public loginstatus  = localStorage.getItem("loginstatus");

  ngOnInit() 
  {

    this.form = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],

    });
  }




  insert()
  {
    let data =
    {
      'nombres':this.form.value.nombres,
      'apellidos':this.form.value.apellidos,
    }

    console.log(data);
    this.autorService.insertar(data).subscribe(
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
