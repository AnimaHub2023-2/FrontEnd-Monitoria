import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';


const monitorias = [
  {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
  {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
    {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
    {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
    {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
    {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
  {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
  {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
  {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
  {
    id: 1,
    curso: 'Modelagem de Software',
    modelo: 'Online',
    dia: 'Terça-feira',
    horario: 1900,
    professor: 'Mario Santos'
  },
]
@Component({
  selector: 'app-monitorias',
  templateUrl: './monitorias.component.html',
  styleUrls: ['./monitorias.component.css']
})

export class MonitoriasComponent {

  campusIndex!:number
  iesList!: any

  ies!:any

  cursoSelecionado!: any

  listMonitorias: any = monitorias

  constructor(
    private campusService:CampusSelecionadoService,
    private iesService:IesSelecionadaService,
    private cursoService:CursoSelecionadoService
    ) {}

  ngOnInit() {
    this.campusIndex = this.campusService.getCampusSelecionado()
    this.iesList = this.iesService.getIesSelecionada()
    this.cursoSelecionado = this.cursoService.getCursoSelecionado()
  }
}
