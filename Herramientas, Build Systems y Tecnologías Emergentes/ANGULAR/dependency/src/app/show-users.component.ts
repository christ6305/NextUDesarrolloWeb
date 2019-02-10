import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent {
  usuarios : string[] = [];

  constructor(private dataService: DataService) { 
    this.usuarios = this.dataService.getUsers();
  }

  
}
