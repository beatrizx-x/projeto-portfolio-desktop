import { TestBed } from '@angular/core/testing';
import { AbrirJanela } from './abrir-janela';

describe('AbrirJanela', () => {
  let service: AbrirJanela;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrirJanela);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
