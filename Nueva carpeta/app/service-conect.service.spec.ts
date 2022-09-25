import { TestBed } from '@angular/core/testing';

import { ServiceConectService } from './service-conect.service';

describe('ServiceConectService', () => {
  let service: ServiceConectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
