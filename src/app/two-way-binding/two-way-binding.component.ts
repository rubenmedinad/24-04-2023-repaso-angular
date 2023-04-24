import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
nombre: string = ""
constructor(){}
ngOnInit(): void{}
MostrarNombre(){
  alert("Tu nombre es: " + this.nombre)
}
}
