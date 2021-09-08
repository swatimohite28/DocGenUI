import { TestBed } from '@angular/core/testing';

import { GlobalDocumentService } from './global-document.service';

describe('GlobalDocumentService', () => {
  let service: GlobalDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
