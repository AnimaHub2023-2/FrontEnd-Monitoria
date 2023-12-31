import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';
import { MonitoriaSelecionadaService } from 'src/app/service/monitoria-selecionada.service';
import { Router } from '@angular/router';

const monitorias = [
  {
    id: 0,
    curso: 'Nome da UC - Exemplo',
    modelo: 'Presencial',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
  {
    id: 1,
    curso: 'Exemplo de Monitoria',
    modelo: 'Presencial',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
    {
    id: 2,
    curso: 'Outro Exemplo',
    modelo: 'Presencial',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
    }
]
@Component({
  selector: 'app-monitorias',
  templateUrl: './monitorias.component.html',
  styleUrls: ['./monitorias.component.css']
})

export class MonitoriasComponent {

  campusIndex!:number

  ies!:any

  cursoSelecionado!: any

  listMonitorias: any = monitorias

  constructor(
    private campusService:CampusSelecionadoService,
    private iesService:IesSelecionadaService,
    private cursoService:CursoSelecionadoService,
    private monitoriaService:MonitoriaSelecionadaService,
    private router:Router
    ) {}

  ngOnInit() {
    this.campusIndex = this.campusService.getCampusSelecionado()
    this.ies = this.iesService.getIesSelecionada()
    this.cursoSelecionado = this.cursoService.getCursoSelecionado()
  }

  goForm(id:number) {
    this.router.navigate([`cadastro/aluno/${this.listMonitorias[id].curso}`])
    this.monitoriaService.setMonitoriaSelecionado(this.listMonitorias[id])
  }
}
