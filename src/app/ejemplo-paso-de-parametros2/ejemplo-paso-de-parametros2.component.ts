import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo-paso-de-parametros2',
  templateUrl: './ejemplo-paso-de-parametros2.component.html',
  styleUrls: ['./ejemplo-paso-de-parametros2.component.css']
})
export class EjemploPasoDeParametros2Component {
id: number =0
constructor(private activarrutas:  ActivatedRoute){}
ngOnInit(): void{
  this.id=this.activarrutas.snapshot.params['id']
  console.log(this.id)
}
}
