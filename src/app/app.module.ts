import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { FotopabloComponent } from './components/fotopablo/fotopablo.component';
import { FotoportadaComponent } from './components/fotoportada/fotoportada.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { LoginComponent } from './components/navbar/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatospersonalesComponent,
    FotopabloComponent,
    FotoportadaComponent,
    NavbarComponent,
    LogoComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
