import { Injectable, EventEmitter } from '@angular/core';
import { DatabaseService } from './database.service';
import { Response } from '@angular/http';
import { Tarea } from './Tarea';
import { Grupo } from './Grupo';

@Injectable()
export class TareasDataService {

  grupos : Grupo[];
  tareas : Tarea[];


  constructor(private database : DatabaseService) {
     
  }

  initData(){
    this.database.getTareas()
      .subscribe(
        (data) => {
          this.tareas = data
        }
               
      )
    this.database.getGrupos()
      .subscribe(
        (data) => {
          this.grupos = data
        }
            
      )
  }

  getTareasHoy(){
    let tareasHoy : Tarea[] = [];
    let hoy = this.getFechaHoy();
    this.tareas.forEach(element => {
      if (element.fecha == hoy) {
        tareasHoy.push(element);
      }

    });
    return tareasHoy;
  }

  getFechaHoy(){
    let hoy = new Date();
    let anio, mes, dia;
    if(hoy.getDate()<10){
      dia = '0'+hoy.getDate()
    }else dia = hoy.getDate();
    if ((hoy.getMonth()+1)<10) {
      mes = '0'+(hoy.getMonth()+1);
    }else mes = (hoy.getMonth()+1);
    anio = hoy.getFullYear();
    return anio+'-'+mes+'-'+dia
  }

  getTareasGrupo(grupo){
    let tareasGrupo : Object[] = [];
    this.tareas.forEach(element => {
      if(element.grupo == grupo){
        tareasGrupo.push(element);
      }
    })
    return tareasGrupo;
  }

  addTarea(newTarea : Tarea){ 
    this.tareas.push(newTarea)
    this.database.addTarea(this.tareas)
      .subscribe(
        (data : Response) => console.log(data)
        
        
      )
  }

}
