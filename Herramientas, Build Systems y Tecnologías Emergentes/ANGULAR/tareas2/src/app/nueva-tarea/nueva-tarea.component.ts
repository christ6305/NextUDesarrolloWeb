import { Component, OnInit } from '@angular/core';
import { DatePickerModule } from 'ng2-datepicker';
import { FormGroup, FormControl } from '@angular/forms';
import { Grupo } from '../Grupo';
import { TareasDataService } from '../tareas-data.service';
import { Tarea } from '../Tarea';
import { Router } from '@angular/router';

@Component({
  selector: 't-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  formulario : FormGroup;
  grupos : Grupo[];

  constructor(private data : TareasDataService, private router : Router) { }

  ngOnInit() {
    this.grupos = this.data.grupos;
    this.formulario = new FormGroup(
      {
        'titulo' : new FormControl(),
        'descripcion': new FormControl(),
        'fecha' : new FormControl(),
        'grupo' : new FormControl()
      }
    )
  }

  onSubmit(){
    let newTarea = new Tarea;
    console.log(this.formulario);
    
    if(this.formulario.valid){
      newTarea.titulo = this.formulario.value.titulo;
      newTarea.descripcion = this.formulario.value.descripcion;
      newTarea.fecha = this.formulario.value.fecha.formatted;
      newTarea.grupo = this.formulario.value.grupo;
      this.data.addTarea(newTarea)
      this.router.navigate(['inicio'])
    }

    
    
  }

}
