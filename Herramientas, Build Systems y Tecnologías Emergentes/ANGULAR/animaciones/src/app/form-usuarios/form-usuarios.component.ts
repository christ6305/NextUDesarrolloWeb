import { Component } from '@angular/core';

@Component({
  selector: 'form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent {


  enviarForm(form){
    console.log(form);
  }
  

}
