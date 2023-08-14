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
import { IesComponent } from './components/pages/ies/ies.component';
import { CursosComponent } from './components/pages/cursos/cursos.component';
import { MonitoriasComponent } from './components/pages/monitorias/monitorias.component';
import { AformComponent } from './components/pages/aform/aform.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sobre', component: AboutComponent},
  {path:'gerundio', component: GerundioComponent},
  {path:'instituicoes', component: InstituicaoComponent},
  {path:'contato', component: ContatoComponent},

  // Pag Seleção, FAQ
  {path:'selecao-edital', component:EditalComponent},
  {path:'faq', component:FaqComponent},

  // ROTAS IES
  {path:'instituicoes/:nome', component: IesComponent},
  {path:'instituicoes/:nome/:campus', component: CursosComponent},
  {path:'instituicoes/:nome/:campus/:curso', component: MonitoriasComponent},

  // Form Aluno
  {path:'cadastro/aluno/:aula', component: AformComponent},

  // Pag Erro
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
