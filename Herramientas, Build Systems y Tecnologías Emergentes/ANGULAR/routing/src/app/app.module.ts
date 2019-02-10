import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion.component';
import { NoticiasComponent } from './noticias.component';
import { PerfilComponent } from './perfil.component';
import { HomeComponent } from './home.component';

import { L3RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    NoticiasComponent,
    PerfilComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    L3RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
