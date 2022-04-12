import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { FotopabloComponent } from './components/fotopablo/fotopablo.component';
import { FotoportadaComponent } from './components/fotoportada/fotoportada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatospersonalesComponent,
    FotopabloComponent,
    FotoportadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
