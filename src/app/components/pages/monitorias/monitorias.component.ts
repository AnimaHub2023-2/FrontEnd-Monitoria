import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { CampusSelecionadoService } from 'src/app/service/campus-selecionado.service';

@Component({
  selector: 'app-monitorias',
  templateUrl: './monitorias.component.html',
  styleUrls: ['./monitorias.component.css']
})
export class MonitoriasComponent {

  campusIndex!:number
  iesList!: any

  ies!:any

  constructor(
    private campusService:CampusSelecionadoService,
    private iesService:IesSelecionadaService
    ) {}

  ngOnInit() {
    this.campusIndex = this.campusService.getCampusSelecionado()
    this.iesList = this.iesService.getIesSelecionada()


    console.log(
      this.iesList
    )
  }
}
