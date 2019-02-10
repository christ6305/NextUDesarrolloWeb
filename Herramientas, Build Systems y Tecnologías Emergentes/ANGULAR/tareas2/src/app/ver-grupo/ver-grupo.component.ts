import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 't-ver-grupo',
  templateUrl: './ver-grupo.component.html',
  styleUrls: ['./ver-grupo.component.css']
})
export class VerGrupoComponent implements OnInit {

  tareas : Object[];
  nombreGrupo : string;

  constructor(private data : TareasDataService, private activatedRoute : ActivatedRoute) {
    this.nombreGrupo = this.activatedRoute.snapshot.params['nombre'];
  }

  ngOnInit() {
    this.tareas = this.data.getTareasGrupo(this.nombreGrupo);
  }

}
