import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { ITareasPendientesComponent } from './i-tareas-pendientes/i-tareas-pendientes.component';
import { ITareasHoyComponent } from './i-tareas-hoy/i-tareas-hoy.component';
import { ITareasGruposComponent } from './i-tareas-grupos/i-tareas-grupos.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { DatePickerModule } from 'ng2-datepicker';
import { TareasRoutingModule } from './app-routing.module';
import { VerGrupoComponent } from './ver-grupo/ver-grupo.component';
import { TareasDataService } from './tareas-data.service';
import { CheckFechaPipe } from './check-fecha.pipe';
import { DatabaseService } from './database.service';
import { FirstPageComponent } from './first-page/first-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    ITareasPendientesComponent,
    ITareasHoyComponent,
    ITareasGruposComponent,
    NuevaTareaComponent,
    VerGrupoComponent,
    CheckFechaPipe,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TareasRoutingModule,
    DatePickerModule,
    ReactiveFormsModule
  ],
  providers: [TareasDataService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
