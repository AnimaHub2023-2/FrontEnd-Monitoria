import { TestBed } from '@angular/core/testing';

import { IesSelecionadaService } from './ies-selecionada.service';

describe('IesSelecionadaService', () => {
  let service: IesSelecionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IesSelecionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
