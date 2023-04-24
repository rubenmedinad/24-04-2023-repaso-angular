import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ejemplo-paso-de-varios-parametros2',
  templateUrl: './ejemplo-paso-de-varios-parametros2.component.html',
  styleUrls: ['./ejemplo-paso-de-varios-parametros2.component.css']
})
export class EjemploPasoDeVariosParametros2Component {
  nombre:string=""
  edad:number=0
  constructor(private activarrutas:  ActivatedRoute){}
  ngOnInit(): void{
    this.nombre=this.activarrutas.snapshot.params['nombre']
    this.edad=this.activarrutas.snapshot.params['edad']
    console.log(this.nombre)
    console.log(this.edad)
  }
}

