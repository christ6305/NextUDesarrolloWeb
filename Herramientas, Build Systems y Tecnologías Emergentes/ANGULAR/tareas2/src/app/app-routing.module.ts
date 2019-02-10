import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { VerGrupoComponent } from './ver-grupo/ver-grupo.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio/nueva-tarea', component: NuevaTareaComponent },
  { path: 'inicio/ver-grupo/:nombre', component: VerGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TareasRoutingModule { }
