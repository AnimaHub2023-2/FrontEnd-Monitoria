import { Component, OnInit } from '@angular/core';
import { IesSelecionadaService } from 'src/app/service/ies-selecionada.service';
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
    private router: Router,
  ) {}

  ngOnInit() {

    this.ies = this.iesService.getIesSelecionada()
    console.log(this.ies.iesEnviar.instituicoes[1].nome)
    console.log(this.ies)

  }

  goCampus(nome: string) {
    console.log(nome)
    this.router.navigate([`instituicoes/ies/${this.ies.iesEnviar.id}/${nome}`])
  }

}
