import { Component, OnInit } from '@angular/core';
import { EditorialService } from 'src/services/editorial.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  constructor(
     private editorialService : EditorialService
  ) { }
  public editoriales: any;
  public buscar:any;
  public switch : boolean;
  public p =0;

  ngOnInit()
  {
    this.listar();
  }

  listar()
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
   delete(id)
  {
     GeneralService.ABRIR_CONFIRMACION().subscribe(
  		response => {
        this.editorialService.eliminar(id).subscribe(
          response => {
            GeneralService.ABRIR_MENSAJE("Eliminado correctamente", "success");
            this.listar();
          },
          error => {
            console.log(<any>error);
          }
        );
  		} 
     ); 
  }

}