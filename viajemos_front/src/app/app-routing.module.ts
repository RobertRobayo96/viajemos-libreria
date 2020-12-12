import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

import {LibroComponent } from './libro/libro/libro.component';
import {AgregarLibroComponent } from './libro/agregar-libro/agregar-libro.component';
import {EditarLibroComponent } from './libro/editar-libro/editar-libro.component';

import {AutorComponent } from './autor/autor/autor.component';
import {AgregarAutorComponent } from './autor/agregar-autor/agregar-autor.component';
import {EditarAutorComponent } from './autor/editar-autor/editar-autor.component';

import {EditorialComponent } from './editorial/editorial/editorial.component';
import {AgregarEditorialComponent } from './editorial/agregar-editorial/agregar-editorial.component';
import {EditarEditorialComponent } from './editorial/editar-editorial/editar-editorial.component';

import {LibroAutorComponent } from './libro/libro-autor/libro-autor.component';

const routes: Routes = [
 
  { path: '', component : InicioComponent,},

  {path: 'login', component : LoginComponent }, 
 
  {path: 'libro', component : LibroComponent,},
  {path: 'libro/agregar', component : AgregarLibroComponent,},
  {path: 'libro/editar/:id', component : EditarLibroComponent,},
  {path: 'libro-autor/:id', component : LibroAutorComponent,},

  {path: 'autor', component : AutorComponent, },
  {path: 'autor/agregar', component : AgregarAutorComponent,},
  {path: 'autor/editar/:id', component : EditarAutorComponent,},

  {path: 'editorial', component : EditorialComponent,},
  {path: 'editorial/agregar', component : AgregarEditorialComponent,},
  {path: 'editorial/editar/:id', component : EditarEditorialComponent,},


];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
