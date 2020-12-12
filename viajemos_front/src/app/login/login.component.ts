import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private generalService : GeneralService,
    private loginService : LoginService,
    private formBuilder: FormBuilder,

  ) {}
/*USER LOGGED*/
  public user:any= [];
  public idUser: any ;
  public data : FormGroup;
  public loginstatus  = localStorage.getItem("loginstatus");

  ngOnInit() 
  {
    this.data = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register()
  {
    let data =
    {
      'email' :  this.data.value.email,
      'password' :  this.data.value.password,
    }

    this.loginService.login(data).subscribe(
      response => { 
          this.user= response;
          console.log(this.user);
          localStorage.setItem("loginstatus", "true");
          localStorage.setItem("logindata", JSON.stringify(response));
          window.location.href ='';
      
          },
          error => {
            if(error.status = 401)
            {
              this.generalService.abrirMensaje("No estas autorizado para ingresar", "error");
            }else{
              this.generalService.abrirMensaje("Email / password incorrect", "error");
              console.log(<any>error);
            }
            if(error.status = 400)
            {
              this.generalService.abrirMensaje(error['error'], "error");
            }else{
              this.generalService.abrirMensaje("Email / password incorrect", "error");
              console.log(<any>error);
            }
              
            },
          );
        }
  
}
