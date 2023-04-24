import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
@Component({
  selector: 'app-ejemplo-servicios',
  templateUrl: './ejemplo-servicios.component.html',
  styleUrls: ['./ejemplo-servicios.component.css']
})
export class EjemploServiciosComponent {
  constructor(private miServicio:ServiciosService){}
mostrarMensaje(){
  this.miServicio.mensajeServicios();
  console.log(this.mostrarMensaje)
}
}
