import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampusSelecionadoService {

  private chaveCampus = '2-IndexInstituicoes'
  private valorCampus!: number

  constructor() { }

  setCampusSelecionado(campus:number) {
    this.valorCampus = campus
    localStorage.setItem(this.chaveCampus, JSON.stringify(this.valorCampus));
  }

  getCampusSelecionado() {
    const a = localStorage.getItem(this.chaveCampus)
    return this.valorCampus, a ? JSON.parse(a):null;
  }
}
