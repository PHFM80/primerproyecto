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
import { IngresoComponent } from './components/navbar/login/ingreso/ingreso.component';
import { RegistroComponent } from './components/navbar/login/registro/registro.component';
import { BodyComponent } from './components/body/body.component';
import { AcercademiComponent } from './components/body/acercademi/acercademi.component';
import { EstudiosComponent } from './components/body/estudios/estudios.component';
import { SecundariaComponent } from './components/body/Estudios/secundaria/secundaria.component';
import { IacComponent } from './components/body/Estudios/iac/iac.component';
import { OtroscursosComponent } from './components/body/Estudios/otroscursos/otroscursos.component';
import { ArgProgramaComponent } from './components/body/estudios/arg-programa/arg-programa.component';
import { ArgYoProgramoComponent } from './components/body/estudios/arg-yo-programo/arg-yo-programo.component';
import { AptitudesComponent } from './components/body/aptitudes/aptitudes.component';
import { ApreciacionesComponent } from './components/body/apreciaciones/apreciaciones.component';
import { InteresesComponent } from './components/body/intereses/intereses.component';
import { Iac2Component } from './components/body/estudios/iac2/iac2.component';
import { FooterComponent } from './components/footer/footer.component';

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
    LoginComponent,
    IngresoComponent,
    RegistroComponent,
    BodyComponent,
    AcercademiComponent,
    EstudiosComponent,
    SecundariaComponent,
    IacComponent,
    OtroscursosComponent,
    ArgProgramaComponent,
    ArgYoProgramoComponent,
    AptitudesComponent,
    ApreciacionesComponent,
    InteresesComponent,
    Iac2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
