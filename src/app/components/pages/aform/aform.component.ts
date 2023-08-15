import { instituicoes } from './../../../interface/instituicoes';
import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { MonitoriaSelecionadaService } from 'src/app/service/monitoria-selecionada.service';
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
    private monitoriaSeleciona:MonitoriaSelecionadaService
  ) {}

  ngOnInit() {
    this.ies = this.iesSelecionada.getIesSelecionada()
    this.getCurso = this.cursoSelecionado.getCursoSelecionado()
    this.monitoria = this.monitoriaSeleciona.getMonitoriaSelecionado()

    this.campusIndex = this.campusSelecionado.getCampusSelecionado()
    this.nome = this.ies.iesEnviar.nome
    this.campus = this.ies.iesEnviar.instituicoes[0].nome
    this.curso = this.getCurso.name
  }
}



