import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  usuarios : string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.usuarios = this.dataService.getUsers();
  }

  
}
