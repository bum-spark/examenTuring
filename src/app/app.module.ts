import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Maquinas/navbar/navbar.component';
import { NodeterministaComponent } from './Maquinas/components/nodeterminista/nodeterminista.component';
import { UtmComponent } from './Maquinas/components/utm/utm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NodeterministaComponent,
    UtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
