import { Component } from '@angular/core';

@Component({
  selector: 'app-clasepadre-recibe',
  templateUrl: './clasepadre-recibe.component.html',
  styleUrls: ['./clasepadre-recibe.component.css']
})
export class ClasepadreRecibeComponent {
  nombres: string="";
  ngOnInit(): void{

  }
  anadir(nombre:string){

    this.nombres=nombre
  }
}
