import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPreviewManagerComponent } from './document-preview-manager.component';

fdescribe('DocumentPreviewManagerComponent', () => {
  let component: DocumentPreviewManagerComponent;
  let fixture: ComponentFixture<DocumentPreviewManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentPreviewManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPreviewManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
