import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPrintManagerComponent } from './document-print-manager.component';

fdescribe('DocumentPrintManagerComponent', () => {
  let component: DocumentPrintManagerComponent;
  let fixture: ComponentFixture<DocumentPrintManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentPrintManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPrintManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
