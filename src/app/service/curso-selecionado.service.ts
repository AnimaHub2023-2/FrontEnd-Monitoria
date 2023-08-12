import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoSelecionadoService {

  private chaveCurso = 'campus'
  private valorCurso: any
  private cursoSelecionado: any

  constructor() { }

  setCursoSelecionado(curso:any) {
    this.valorCurso = curso
    localStorage.setItem(this.chaveCurso, JSON.stringify(this.valorCurso));
  }

  getCursoSelecionado() {
    const a = localStorage.getItem(this.chaveCurso)
    return this.valorCurso, a ? JSON.parse(a):null;
  }
}
