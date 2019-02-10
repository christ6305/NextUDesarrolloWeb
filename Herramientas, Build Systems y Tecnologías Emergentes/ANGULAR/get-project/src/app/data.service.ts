import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {
  private usuarios: string[] = [];

  constructor(private logService: LogService, private httpService : HttpService){ }



  newUser(nombre: string){
    this.usuarios.push(nombre);
    this.logService.escribirLog('Se añadio el usuario '+ nombre);
    this.httpService.sendDatos({nombre:nombre});
      .subscribe(
        (data:Response)=> console.log(data)
      )
  }

  getUsers(){
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => console.log(data)
      )
    return this.usuarios;
  }


}
