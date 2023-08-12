import { TestBed } from '@angular/core/testing';

import { CursoSelecionadoService } from './curso-selecionado.service';

describe('CursoSelecionadoService', () => {
  let service: CursoSelecionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoSelecionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
