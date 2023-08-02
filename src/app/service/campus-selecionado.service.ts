import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampusSelecionadoService {

  private chaveCampus = 'campus'
  private valorCampus: any
  private campusSelecionado: any

  constructor() { }

  setCampusSelecionado(campus:any) {
    this.valorCampus = campus
    localStorage.setItem(this.chaveCampus, JSON.stringify(this.valorCampus));
  }

  getCampusSelecionado() {
    const a = localStorage.getItem(this.chaveCampus)
    return this.valorCampus, a ? JSON.parse(a):null;
  }
}
