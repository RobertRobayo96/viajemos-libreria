import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from'@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PdfViewerModule } from 'ng2-pdf-viewer';
//Libraries
import {ShContextMenuModule} from 'ng2-right-click-menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { UiSwitchModule } from 'ngx-toggle-switch';
//Pages
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

//Complements
import { HeaderComponent } from './complements/header/header.component';
import { MenuComponent } from './complements/menu/menu.component';
import { FooterComponent } from './complements/footer/footer.component';
import { NotfoundComponent } from './complements/notfound/notfound.component';

import {LibroComponent } from './libro/libro/libro.component';
import {AgregarLibroComponent } from './libro/agregar-libro/agregar-libro.component';
import {EditarLibroComponent } from './libro/editar-libro/editar-libro.component';

import {LibroAutorComponent } from './libro/libro-autor/libro-autor.component';

import {AutorComponent } from './autor/autor/autor.component';
import {AgregarAutorComponent } from './autor/agregar-autor/agregar-autor.component';
import {EditarAutorComponent } from './autor/editar-autor/editar-autor.component';

import {EditorialComponent } from './editorial/editorial/editorial.component';
import {AgregarEditorialComponent } from './editorial/agregar-editorial/agregar-editorial.component';
import {EditarEditorialComponent } from './editorial/editar-editorial/editar-editorial.component';
@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NotfoundComponent,
    InicioComponent,
    LoginComponent,
    LibroComponent,
    AgregarLibroComponent,
    EditarLibroComponent,
    AutorComponent,
    AgregarAutorComponent,
    EditarAutorComponent,
    EditorialComponent,
    AgregarEditorialComponent,
    EditarEditorialComponent,
    LibroAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShContextMenuModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AutocompleteLibModule,
    ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    PdfViewerModule,
    BrowserAnimationsModule,
    UiSwitchModule
  ],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy,
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
