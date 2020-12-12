import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient
  ) { }
  isValid(): boolean{
    return false;
  }

  url : any = GeneralService.WS_URL;


  login(data): any 
  {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    let params = data;
  	return this.http.post(this.url + 'login', params, {headers : headers}); 
  }

}
