import { Component } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LogService]
})
export class NewUserComponent {

  constructor(private logService: LogService, private dataService: DataService) { }

  onLog(valor){
    this.logService.escribirLog(valor);
  }

  onNewUser(nombre){
    this.dataService.newUser(nombre);
  }

}
