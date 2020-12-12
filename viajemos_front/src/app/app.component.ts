import { Component } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Registro de Clientes';
  public loginstatus  = localStorage.getItem("loginstatus");
  myDate= Date.now();

  constructor(
    private generalService : GeneralService,
  ) {}

  ngOnInit(): void
  {

   
  }
}
