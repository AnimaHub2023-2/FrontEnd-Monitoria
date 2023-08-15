import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IesSelecionadaService {

  private chaveIes = '1-IES';
  private valorIes: any;

  constructor() { }

  setIesSelecionada(ies: any): void {
    this.valorIes = ies;
    localStorage.setItem(this.chaveIes, JSON.stringify(this.valorIes));
  }

  getIesSelecionada(): any {
    const a = localStorage.getItem(this.chaveIes)
    return this.valorIes, a ? JSON.parse(a):null;
  }
}
