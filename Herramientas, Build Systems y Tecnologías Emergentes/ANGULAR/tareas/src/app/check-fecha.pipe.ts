import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkFecha'
})
export class CheckFechaPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let fecha = new Date(value);
    let hoy = new Date();

    if(hoy>fecha){
      return value + ' !'
    }else{
      return value;
    }
    
  }

}
