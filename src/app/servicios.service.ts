import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  texto="Hola mundo"
  mensajeServicios(){
    alert(this.texto)
  }
  constructor() { }
}
