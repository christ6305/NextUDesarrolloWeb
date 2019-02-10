import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
  private usuarios: string[] = [];

  constructor(private logService: LogService){ }

  newUser(nombre: string){
    this.usuarios.push(nombre);
    this.logService.escribirLog('Se añadio el usuario '+ nombre);
  }

  getUsers(){
    return this.usuarios;
  }
  

}
