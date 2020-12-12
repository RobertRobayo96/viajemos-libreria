import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/services/libro.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  constructor(
    private libroService : LibroService
  ) { }
  public libros: any;
  public buscar:any;
  public p =0;

  ngOnInit()
  {
    this.listar();
  }

  listar()
  {
    this.libroService.listar().subscribe(
      response => {
        this.libros = response;
        console.log(this.libros)
      },
      error => {
        console.log(<any>error);
      }
    );

  }
  eliminar(id)
  {
     GeneralService.ABRIR_CONFIRMACION().subscribe(
  		response => {
        this.libroService.eliminar(id).subscribe(
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