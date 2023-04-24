import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EjemploServiciosComponent } from './ejemplo-servicios/ejemplo-servicios.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploPasoDeParametrosComponent } from './ejemplo-paso-de-parametros1/ejemplo-paso-de-parametros.component';
import { EjemploPasoDeParametros2Component } from './ejemplo-paso-de-parametros2/ejemplo-paso-de-parametros2.component';
import { EjemploPasoDeVariosParametros1Component } from './ejemplo-paso-de-varios-parametros1/ejemplo-paso-de-varios-parametros1.component';
import { EjemploPasoDeVariosParametros2Component } from './ejemplo-paso-de-varios-parametros2/ejemplo-paso-de-varios-parametros2.component';
import { ClasepadrePasaComponent } from './clasepadre-pasa/clasepadre-pasa.component';
import { ClasepadreRecibeComponent } from './clasepadre-recibe/clasepadre-recibe.component';
const routes: Routes = [
  {path:'interpolacion',component:InterpolacionComponent},
  {path:'OneWayBinding',component:OneWayBindingComponent},
  {path:'evento',component:EventoComponent},
  {path:'TwoWayBinding',component:TwoWayBindingComponent},
  {path:'servicio',component:EjemploServiciosComponent},
  {path:'directivas',component:DirectivasComponent},
  {path:'paso',component:EjemploPasoDeParametrosComponent},
  {path:'recibo/:id',component:EjemploPasoDeParametros2Component},
  {path:'pasovarios',component:EjemploPasoDeVariosParametros1Component},
  {path:'recibovarios/:nombre/:edad',component:EjemploPasoDeVariosParametros2Component},
  {path:'Padre1',component:ClasepadrePasaComponent},
  {path:'Padre2',component:ClasepadreRecibeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
