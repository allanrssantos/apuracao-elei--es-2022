/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApuracaoService } from './apuracao.service';

describe('Service: Apuracao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApuracaoService]
    });
  });

  it('should ...', inject([ApuracaoService], (service: ApuracaoService) => {
    expect(service).toBeTruthy();
  }));
});
