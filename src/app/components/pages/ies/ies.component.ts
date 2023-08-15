import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ies',
  templateUrl: './ies.component.html',
  styleUrls: ['./ies.component.css']
})
export class IesComponent {

  ies:any

  constructor(
    private iesService: IesSelecionadaService,
    private campusService: CampusSelecionadoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.ies = this.iesService.getIesSelecionada()
  }

  goCampus(ies:any, indexCampus:any) {
    console.log('Campus Selecionado = ' + ies.instituicoes[indexCampus].nome,)
    console.log('Posição do Campus Selecionado = ' + indexCampus)

    this.campusService.setCampusSelecionado(indexCampus)
    this.router.navigate([`instituicoes/${this.ies.nome}/${ies.instituicoes[indexCampus].nome.toLowerCase()}`])

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
