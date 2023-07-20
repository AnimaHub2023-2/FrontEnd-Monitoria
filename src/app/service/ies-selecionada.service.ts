import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IesSelecionadaService {

  private iesSelecionada: any;
  constructor() { }

  setIesSelecionada(ies: any): void {
    this.iesSelecionada = ies;
  }

  getIesSelecionada(): any {
    return this.iesSelecionada;
  }
}
