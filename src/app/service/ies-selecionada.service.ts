import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IesSelecionadaService {


  private chaveLocalStorage = 'ies';
  private iesSelecionada: any;
  private local: any;
  constructor() { }

  setIesSelecionada(ies: any, local: any): void {
    this.iesSelecionada = ies;
    this.local = local
    localStorage.setItem(this.chaveLocalStorage, JSON.stringify(local));
  }

  getIesSelecionada(): any {
    const a = localStorage.getItem(this.chaveLocalStorage)
    return this.iesSelecionada, a ? JSON.parse(a):null;
  }
}
