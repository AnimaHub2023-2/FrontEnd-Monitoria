import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GerundioComponent } from './components/pages/gerundio/gerundio.component';
import { InstituicaoComponent } from './components/pages/instituicao/instituicao.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditalComponent } from './components/pages/edital/edital.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { IesComponent } from './components/pages/ies/ies.component';
import { AformComponent } from './components/pages/aform/aform.component';
import { CursosComponent } from './components/pages/cursos/cursos.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GerundioComponent,
    InstituicaoComponent,
    ContatoComponent,
    ErrorComponent,
    EditalComponent,
    FaqComponent,
    IesComponent,
    AformComponent,
    CursosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

