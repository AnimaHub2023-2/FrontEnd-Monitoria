import { Component } from '@angular/core';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})

export class CursosComponent {

  ies: any
  campusIndex!: number

  constructor(
    private iesService: IesSelecionadaService,
    private campusService: CampusSelecionadoService
  ) { }

  ngOnInit() {

    this.campusIndex = this.campusService.getCampusSelecionado()
    this.ies = this.iesService.getIesSelecionada()

    console.log(this.ies.iesEnviar.instituicoes[1].nome)
    console.log(this.ies)
    console.log(this.campusIndex)
  }
}


