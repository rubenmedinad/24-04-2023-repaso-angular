import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent {
  aceptar: boolean= false;
  ngOnInit(): void {
  }
  cambiarValor(){
    this.aceptar=!this.aceptar;
}

}
