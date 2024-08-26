import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NodeterministaComponent } from './components/nodeterminista/nodeterminista.component';
import { UtmComponent } from './components/utm/utm.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'nodeterminista',
        component: NodeterministaComponent
      },
      {
        path: 'utm',
        component: UtmComponent
      },
      {
        path: '**',
        redirectTo: 'nodeterminista'
      }
    ]
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquinaRoutingModule { }
