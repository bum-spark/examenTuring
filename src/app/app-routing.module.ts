import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./Maquinas/maquinas.module').then(m=>m.MauinaModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
