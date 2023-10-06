import { instituicoes } from './../../../interface/instituicoes';
import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { MonitoriaSelecionadaService } from 'src/app/service/monitoria-selecionada.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css'],
})

export class AformComponent {

  ies!:any
  getCurso!:any
  monitoria!:any

  campusIndex!:number
  nome!:string
  campus!:string
  curso!:string

  constructor(
    private iesSelecionada:IesSelecionadaService,
    private cursoSelecionado:CursoSelecionadoService,
    private campusSelecionado:CampusSelecionadoService,
    private monitoriaSeleciona:MonitoriaSelecionadaService,
    private router:Router
  ) {}

  ngOnInit() {
    this.ies = this.iesSelecionada.getIesSelecionada()
    this.getCurso = this.cursoSelecionado.getCursoSelecionado()
    this.monitoria = this.monitoriaSeleciona.getMonitoriaSelecionado()

    this.campusIndex = this.campusSelecionado.getCampusSelecionado()
    this.nome = this.ies.nome
    this.campus = this.ies.instituicoes[this.campusIndex].nome
    this.curso = this.getCurso.name
    console.log(`instituicoes/${this.nome}/${this.campus.toLowerCase()}/${this.curso.toLowerCase()}`)
  }

  back() {
    this.router.navigate([
      `/instituicoes/${this.nome}/${this.campus.toLowerCase()}/${this.curso.toLowerCase()}`
    ]) 
  }

  home() {
    this.router.navigate([
      '/'
    ])
  }

}



