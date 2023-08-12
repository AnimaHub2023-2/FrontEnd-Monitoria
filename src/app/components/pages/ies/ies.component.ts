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
    console.log(this.ies)

  }

  goCampus(ies:any, index:any) {
    console.log(ies)
    console.log(ies.iesEnviar.instituicoes[index].nome)
    this.campusService.setCampusSelecionado(index)
    this.router.navigate([`instituicoes/ies/${this.ies.iesEnviar.id}/${ies.iesEnviar.instituicoes[index].nome}`])
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
