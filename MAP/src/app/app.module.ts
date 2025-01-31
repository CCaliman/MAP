import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { TelaInicialComponent } from './telas/tela-inicial/tela-inicial.component';
import { CriacaoMapComponent } from './telas/criacao-map/criacao-map.component';
import { MapComponent } from './telas/map/map.component';
import { MetodologiasComponent } from './telas/metodologias/metodologias.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TelaInicialComponent,
    CriacaoMapComponent,
    MapComponent,
    MetodologiasComponent,
    HeaderComponent
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
