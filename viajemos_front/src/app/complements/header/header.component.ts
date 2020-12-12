import { Component, OnInit, OnChanges } from '@angular/core';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  constructor(
    
  ) { }
  public userinfo : any = GeneralService.USERINFO.data;


  ngOnInit() {
  }
  
  
  logout()
  {
    localStorage.clear();
    window.location.href = '/';
  }

  
}