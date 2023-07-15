import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GerundComponent } from './components/pages/gerund/gerund.component';
import { InstitutionsComponent } from './components/pages/institutions/institutions.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Sobre', component: AboutComponent},
  {path:'Gerundio', component: GerundComponent},
  {path:'Instituicoes', component: InstitutionsComponent},
  {path:'Contato', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
