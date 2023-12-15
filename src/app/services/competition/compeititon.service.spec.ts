import { TestBed } from '@angular/core/testing';

import { CompeititonService } from './compeititon.service';

describe('CompeititonService', () => {
  let service: CompeititonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompeititonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
