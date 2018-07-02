import { TestBed, inject } from '@angular/core/testing';

import { IngresosService } from './ingresos.service';

describe('IngresosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresosService]
    });
  });

  it('should be created', inject([IngresosService], (service: IngresosService) => {
    expect(service).toBeTruthy();
  }));
});
