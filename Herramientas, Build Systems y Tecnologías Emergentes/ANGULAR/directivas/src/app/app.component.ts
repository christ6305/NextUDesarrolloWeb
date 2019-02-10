import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tituloMostrado=true;
  listaNombres=['juan','pedro','jose','christian'];

  buttonClicked(){
    this.tituloMostrado=!this.tituloMostrado;
  }
}
