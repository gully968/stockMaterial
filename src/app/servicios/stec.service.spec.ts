import { TestBed, inject } from '@angular/core/testing';

import { StecService } from './stec.service';

describe('StecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StecService]
    });
  });

  it('should be created', inject([StecService], (service: StecService) => {
    expect(service).toBeTruthy();
  }));
});
