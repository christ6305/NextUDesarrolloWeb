import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

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
    CheckFechaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TareasRoutingModule,
    DatePickerModule
  ],
  providers: [TareasDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
