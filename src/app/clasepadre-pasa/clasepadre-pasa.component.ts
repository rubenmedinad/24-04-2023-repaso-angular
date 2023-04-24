import { Component } from '@angular/core';

@Component({
  selector: 'app-clasepadre-pasa',
  templateUrl: './clasepadre-pasa.component.html',
  styleUrls: ['./clasepadre-pasa.component.css']
})
export class ClasepadrePasaComponent {
nombre:string="";
nombreapasar:string=""
anadir(){
  this.nombre=this.nombreapasar
}
}
