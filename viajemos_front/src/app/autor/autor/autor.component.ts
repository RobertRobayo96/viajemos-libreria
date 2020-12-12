import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/services/autor.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  constructor(
    private autorService : AutorService
  ) { }
  public autores: any;
  public buscar:any;
  public p =0;

  ngOnInit()
  {
    this.listar();
  }

  listar()
  {
    this.autorService.listar().subscribe(
      response => {
        this.autores = response;
        console.log(this.autores)
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
        this.autorService.eliminar(id).subscribe(
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