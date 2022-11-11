import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresentacionComponent,
    ProyectosComponent,
    CursosComponent,
    AcercaDeComponent,
    BannerComponent,
    FooterComponent,
    HabilidadesComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
