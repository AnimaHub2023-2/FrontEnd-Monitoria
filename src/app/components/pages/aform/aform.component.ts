import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';

@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css'],


})
export class AformComponent {

  ies!:any
  curso!:any

  nome!:any

  constructor(
    private iesSelecionada:IesSelecionadaService,
    private cursoSelecionado:CursoSelecionadoService
  ) {}

  ngOnInit() {
    this.ies = this.iesSelecionada.getIesSelecionada()
    this.curso = this.cursoSelecionado.getCursoSelecionado()
    this.nome = this.ies.iesEnviar.nome
  }

  teste() {
    console.log(
    this.ies

    )
  }

}



