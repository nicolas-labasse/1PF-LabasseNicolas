import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { LetraCabeceraDirective } from './directives/letra-cabecera.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    ContenidoComponent,
    FormularioComponent,
    NombreCompletoPipe,
    LetraCabeceraDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
