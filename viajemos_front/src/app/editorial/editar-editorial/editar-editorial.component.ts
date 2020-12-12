import { Component, OnInit, ɵConsole } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EditorialService } from 'src/services/editorial.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-editorial',
  templateUrl: './editar-editorial.component.html',
  styleUrls: ['./editar-editorial.component.scss']
})
export class EditarEditorialComponent implements OnInit {

  constructor(

    private formBuilder :FormBuilder,
    private editorialService : EditorialService,
    private router : Router,
    private route : ActivatedRoute,

    ){}

  public form : FormGroup;
  public id : any ;
  public editorial : any = null;
  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    /* this.get(); */
    const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      sede: ['', Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],

    }); 
   this.consultar();
  }
  
  consultar()
  {
    this.editorialService.consultar(this.id).subscribe(
      response => {
        this.editorial = response;
        console.log(this.editorial);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
 
  edit() {
 
    let data = {
      'id':this.id,
      'nombre': this.form.value. nombre,
      'sede': this.form.value.sede,
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
