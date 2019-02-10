import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-grupos',
  templateUrl: './form-grupos.component.html',
  styleUrls: ['./form-grupos.component.css']
})
export class FormGruposComponent implements OnInit {

  miFormulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'nombre-grupo': new FormControl('sin título', Validators.required),
      'size-grupo': new FormControl('', Validators.required),
      'categoria-grupo': new FormControl('', Validators.required)
    })
  }

  enviarFormulario(){
    console.log(this.miFormulario);
  }

}
