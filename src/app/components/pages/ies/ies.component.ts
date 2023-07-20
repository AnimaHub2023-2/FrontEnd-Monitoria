import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';

@Component({
  selector: 'app-ies',
  templateUrl: './ies.component.html',
  styleUrls: ['./ies.component.css']
})
export class IesComponent {

  ies: any

  constructor(
    private iesService: IesSelecionadaService
  ) {}

  ngOnInit() {
    this.ies = this.iesService.getIesSelecionada()
  }

}
