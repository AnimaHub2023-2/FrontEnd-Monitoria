import { TestBed } from '@angular/core/testing';

import { MonitoriaSelecionadaService } from './monitoria-selecionada.service';

describe('MonitoriaSelecionadaService', () => {
  let service: MonitoriaSelecionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoriaSelecionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
