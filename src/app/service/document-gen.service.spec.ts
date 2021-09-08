import { TestBed } from '@angular/core/testing';

import { DocumentGenService } from './document-gen.service';

fdescribe('DocumentGenService', () => {
  let service: DocumentGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
