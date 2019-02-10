import {  Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'],
  animations: [
    trigger('moverCuadro', [
      state('normal', 
        style({
          'background-color': 'red',
          'transform': 'translateX(0)'
        })
      ),
      state('resaltado',
        style({
          'background-color': 'blue',
          'transform': 'translateX(100px)'
        })
      ),
      transition('normal => resaltado', animate(100)),
      transition('resaltado => normal', animate(300))
    ]),
    trigger('animarLista', [
      state('agregado',
        style({
          'opacity': 1,
          'transform': 'translateX(0)'
        })
      ),
      transition('void => agregado', [
        style({
          'opacity': 0,
          'transform': 'translateX(-100px)'
        }),
        animate(200)
      ])
    ])

  ]
})
export class AnimacionesComponent implements OnInit {

  dias: string[] = [];
  estado: string = 'normal';
  estadoNuevoItem = 'agregado';

  constructor() { }

  ngOnInit() {
    this.dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves'];
  }

  newItem(nombre: string){
    this.dias.push(nombre);
  }

  cambiarEstado(){
    this.estado == 'normal' ? this.estado = 'resaltado' : this.estado = 'normal';
  }

}
