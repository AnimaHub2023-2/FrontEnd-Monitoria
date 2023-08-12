import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { CursoSelecionadoService } from 'src/app/service/curso-selecionado.service';

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

  constructor(
    private campusService:CampusSelecionadoService,
    private iesService:IesSelecionadaService,
    private cursoService:CursoSelecionadoService
    ) {}

  ngOnInit() {
    this.campusIndex = this.campusService.getCampusSelecionado()
    this.iesList = this.iesService.getIesSelecionada()
    this.cursoSelecionado = this.cursoService.getCursoSelecionado()

    console.log(
      this.cursoSelecionado
    )
  }
}
