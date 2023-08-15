import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoriaSelecionadaService {

  private chaveMonitoria = 'monitoria'
  private valorMonitoria: any
  private campusSelecionado: any

  constructor() { }

  setMonitoriaSelecionado(monitoria:any) {
    this.valorMonitoria = monitoria
    localStorage.setItem(this.chaveMonitoria, JSON.stringify(this.valorMonitoria));
  }

  getMonitoriaSelecionado() {
    const a = localStorage.getItem(this.chaveMonitoria)
    return this.valorMonitoria, a ? JSON.parse(a):null;
  }
}
