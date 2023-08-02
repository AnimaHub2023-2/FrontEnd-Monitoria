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
    console.log(this.ies.iesEnviar.instituicoes[1].nome)
    console.log(this.ies)

  }

  goCampus(nome: string, index: number) {
    this.campusService.setCampusSelecionado(index)
    this.router.navigate([`instituicoes/ies/${this.ies.iesEnviar.id}/${nome}`])
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
