import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent {

  institutionSelected:string = ''

  constructor (
    private router:Router
  ) {}

  onClick(ies:string):void {
    //salvando a informação da instituição selecionada
    this.institutionSelected = ies

    console.log(`link para ${ies}`)
    this.router.navigate([`Instituicoes/ies`])
  }

}
