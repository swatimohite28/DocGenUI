import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTitleComponent } from './sub-title.component';

fdescribe('SubTitleComponent', () => {
  let component: SubTitleComponent;
  let fixture: ComponentFixture<SubTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
