import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaquinaRoutingModule } from './maquinas-routing.module';
import { UtmComponent } from './components/utm/utm.component';
import { NodeterministaComponent } from './components/nodeterminista/nodeterminista.component';



@NgModule({
  declarations: [
    NavbarComponent,
    UtmComponent,
    NodeterministaComponent
  ],
  imports: [
    CommonModule,
    MaquinaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MauinaModule { }
