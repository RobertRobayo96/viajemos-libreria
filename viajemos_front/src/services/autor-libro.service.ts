import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class AutorLibroService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "autorlibro/";

  listar() : any
  {
    const headers = new HttpHeaders(('application/json'));
  	return this.http.get(this.url + 'listar', {headers : headers}); 
  }

  listarPorLibro(id) : any
  {
    const headers = new HttpHeaders(('application/json'));
  	return this.http.get(this.url + 'listarporlibro/' + id, {headers : headers}); 
  }

  listarPorAutor(id) : any
  {
    const headers = new HttpHeaders(('application/json'));
  	return this.http.get(this.url + 'listarporautor/' + id, {headers : headers}); 
  }

  insertar(form) : any
  {
    const headers = new HttpHeaders('application/json');
    const data = form;
  	return this.http.post(this.url + 'insertar', data, {headers : headers}); 
  }

  consultar(id) : any
  {
    const headers = new HttpHeaders(('application/json'));
  	return this.http.get(this.url + 'consultar/' + id, {headers : headers}); 
  }


  editar(form) : any
  {
    const headers = new HttpHeaders('application/json');
    const data = form;
  	return this.http.put(this.url + 'editar', data, {headers : headers}); 
  }

  eliminar(id) : any
  {
    const headers = new HttpHeaders(('application/json'));
  	return this.http.delete(this.url + 'eliminar/' + id, {headers : headers}); 
  }


}
