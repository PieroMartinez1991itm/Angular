import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarComponent } from './vista/consultar/consultar.component';
import { ListadoComponent } from './vista/listado/listado.component';
import { ToledoComponent } from './vista/toledo/toledo.component';
import { MadridComponent } from './vista/madrid/madrid.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    ListadoComponent,
    ToledoComponent,
    MadridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
