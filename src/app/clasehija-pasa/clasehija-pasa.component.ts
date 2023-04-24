import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clasehija-pasa',
  templateUrl: './clasehija-pasa.component.html',
  styleUrls: ['./clasehija-pasa.component.css']
})
export class ClasehijaPasaComponent {
  nombre:string=""
  @Output() enviardatos = new EventEmitter<string>();

anadir(){
  this.enviardatos.emit(this.nombre)
}
}
