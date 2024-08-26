import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaquinaRoutingModule } from './maquinas-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaquinaRoutingModule
  ]
})
export class MauinaModule { }
