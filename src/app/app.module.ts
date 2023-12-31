import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'

import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
import { MonitoriasComponent } from './components/pages/monitorias/monitorias.component';
import { PformComponent } from './components/pages/pform/pform.component';

import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import { ModalAformComponent } from './components/modal-aform/modal-aform.component';
import { EmailSendComponent } from './components/email-send/email-send.component';




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
    MonitoriasComponent,
    PformComponent,
    ModalAformComponent,
    EmailSendComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

