import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GerundioComponent } from './components/pages/gerundio/gerundio.component';
import { InstituicaoComponent } from './components/pages/instituicao/instituicao.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { EditalComponent } from './components/pages/edital/edital.component';
import { FaqComponent } from './components/pages/faq/faq.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Sobre', component: AboutComponent},
  {path:'Gerundio', component: GerundioComponent},
  {path:'Instituicoes', component: InstituicaoComponent},
  {path:'Contato', component: ContatoComponent},
  {path:'Error/404/notFounded', component: ErrorComponent},

  // Pag Seleção, FAQ
  {path:'Selecao-edital', component:EditalComponent},
  {path:'FAQ', component:FaqComponent},

  // ROTAS IES
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
