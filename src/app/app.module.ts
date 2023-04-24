import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploServiciosComponent } from './ejemplo-servicios/ejemplo-servicios.component';
import { EjemploPasoDeParametrosComponent } from './ejemplo-paso-de-parametros1/ejemplo-paso-de-parametros.component';
import { EjemploPasoDeParametros2Component } from './ejemplo-paso-de-parametros2/ejemplo-paso-de-parametros2.component';
import { EjemploPasoDeVariosParametros1Component } from './ejemplo-paso-de-varios-parametros1/ejemplo-paso-de-varios-parametros1.component';
import { EjemploPasoDeVariosParametros2Component } from './ejemplo-paso-de-varios-parametros2/ejemplo-paso-de-varios-parametros2.component';
import { ClasehijaPasaComponent } from './clasehija-pasa/clasehija-pasa.component';
import { ClasehijaRecibeComponent } from './clasehija-recibe/clasehija-recibe.component';
import { ClasepadreRecibeComponent } from './clasepadre-recibe/clasepadre-recibe.component';
import { ClasepadrePasaComponent } from './clasepadre-pasa/clasepadre-pasa.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBindingComponent,
    EventoComponent,
    TwoWayBindingComponent,
    DirectivasComponent,
    EjemploServiciosComponent,
    EjemploPasoDeParametrosComponent,
    EjemploPasoDeParametros2Component,
    EjemploPasoDeVariosParametros1Component,
    EjemploPasoDeVariosParametros2Component,
    ClasehijaPasaComponent,
    ClasehijaRecibeComponent,
    ClasepadreRecibeComponent,
    ClasepadrePasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
