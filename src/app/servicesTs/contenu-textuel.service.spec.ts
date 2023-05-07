import { TestBed } from '@angular/core/testing';

import { ContenuTextuelService } from './contenu-textuel.service';

describe('ContenuTextuelService', () => {
  let service: ContenuTextuelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenuTextuelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
