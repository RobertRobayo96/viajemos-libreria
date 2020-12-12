import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/services/libro.service';
import { AutorLibroService } from 'src/services/autor-libro.service';
import { GeneralService } from 'src/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-autor',
  templateUrl: './libro-autor.component.html',
  styleUrls: ['./libro-autor.component.scss']
})
export class LibroAutorComponent implements OnInit {

  constructor(
    private libroService : LibroService,
    private autorLibroService : AutorLibroService,
    private router : Router,
    private route : ActivatedRoute,
  ) { }
  public libros; libro; id; autoresPorLibro: any;
  public buscar:any;
  public p =0;

  ngOnInit()
  {
    this.id = this.route.snapshot.paramMap.get('id');
    this.consultar();
    this.listarAutoresPorLibro();
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
  

  listarAutoresPorLibro()
  {
    this.autorLibroService.listarPorLibro(this.id).subscribe(
      response => {
        this.autoresPorLibro = response;
        console.log(this.autoresPorLibro)
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
            this.consultar();
          },
          error => {
            console.log(<any>error);
          }
        );
  		} 
     ); 
  }

}