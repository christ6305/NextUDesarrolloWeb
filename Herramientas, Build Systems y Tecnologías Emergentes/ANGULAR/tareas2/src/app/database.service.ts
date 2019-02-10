import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Tarea } from './Tarea';

@Injectable()
export class DatabaseService {

  constructor(private http : Http) { }

  getTareas(){
    return this.http.get('https://back-end-tareas.firebaseio.com/tareas.json')
      .map((response: Response)=> response.json())
  } 

  getGrupos(){
    return this.http.get('https://back-end-tareas.firebaseio.com/grupos.json')
      .map((response: Response)=> response.json())
  } 

  addTarea(newTareas : Tarea[]){
    let datos = JSON.stringify(newTareas);
    return this.http.put('https://back-end-tareas.firebaseio.com/tareas.json', datos)
      .map((response: Response)=> response.json())
  }
}
