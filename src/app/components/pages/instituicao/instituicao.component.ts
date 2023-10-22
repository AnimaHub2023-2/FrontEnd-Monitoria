import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

import { ies } from 'src/app/interface/ies';
import { InstituicaoService } from './instituicao.service';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.css']
})
export class InstituicaoComponent implements OnInit {

  instituicoes: any;

  constructor (
    private router:Router,
    private iesService: IesSelecionadaService,
    private instituicaoService: InstituicaoService
  ) {}

  ngOnInit(): void {
    this.findInstituicao()
  }

  findInstituicao() {
    this.instituicaoService.buscarInstituicoes()
    .subscribe(response => {
      console.log(response);
      this.instituicoes = response;
    })
  }

  onClick(id:number, nome:string):void {
    const iesEnviar = null //this.iesList[id]

    console.log('ies Selecionada abaixo')
    console.log(iesEnviar)

    this.iesService.setIesSelecionada(iesEnviar)

    this.router.navigate([`instituicoes/${nome}`])

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
