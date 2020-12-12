import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
   
  ) { }
  public userinfo : any = GeneralService.USERINFO;
  ngOnInit() {


}


}
