import { HttpClient } from '@angular/common/http';
import { Expression } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}`;
  
  constructor(
    private http: HttpClient
  ) {
  }

  buscarInstituicoes() {
    return this.http.get(`/api/instituicao/buscar`);
  }

}