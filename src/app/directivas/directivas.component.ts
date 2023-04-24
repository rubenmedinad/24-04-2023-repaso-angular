import { Component } from '@angular/core';
import { Colores } from '../modelos/colores';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})

export class DirectivasComponent {
  mostrarDiv = true;
  colores = [Colores.Rojo, Colores.Verde, Colores.Azul, Colores.Amarillo];
  colorSeleccionado :number=4;
  cambiarVerdadero(){
    this.mostrarDiv=!this.mostrarDiv
  }
}



