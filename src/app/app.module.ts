import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { MapaComponent } from './components/mapa/mapa.component'
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

//Google Maps
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCQUgCEsiiCC5xH586Nwma1PFo4_8LJO60'

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
