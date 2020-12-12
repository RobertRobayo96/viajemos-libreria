import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/services/general.service';
import { EditorialService } from 'src/services/editorial.service';

@Component({
  selector: 'app-agregar-editorial',
  templateUrl: './agregar-editorial.component.html',
  styleUrls: ['./agregar-editorial.component.scss']
})
export class AgregarEditorialComponent implements OnInit {

  constructor(
    private generalService : GeneralService,
    private formBuilder: FormBuilder,
    private router : Router,
    private editorialService : EditorialService

  ) {}
/*USER LOGGED*/
  public user:any= [];
  public document_types : any = [];
  public idUser: any ;
  public form : FormGroup;
  public loginstatus  = localStorage.getItem("loginstatus");

  ngOnInit() 
  {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      sede: ['', Validators.required],
    });
  }

  insert()
  {
    let data =
    {
      'nombre':this.form.value.nombre,
      'sede':this.form.value.sede,
    }
    console.log(data);
    this.editorialService.insertar(data).subscribe(
  		response => {

        GeneralService.ABRIR_MENSAJE(response['message'], "success");
        this.router.navigate(['/editorial']);
      
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
