import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ies',
  templateUrl: './ies.component.html',
  styleUrls: ['./ies.component.css']
})
export class IesComponent {

  ies: any

  constructor(
    private iesService: IesSelecionadaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ies = this.iesService.getIesSelecionada()
  }

  goCampus(nome: string) {
    this.router.navigate([`instituicoes/ies/${this.ies.id}/${nome}`])
  }

}
