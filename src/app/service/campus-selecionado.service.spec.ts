import { TestBed } from '@angular/core/testing';

import { CampusSelecionadoService } from './campus-selecionado.service';

describe('CampusSelecionadoService', () => {
  let service: CampusSelecionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampusSelecionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
