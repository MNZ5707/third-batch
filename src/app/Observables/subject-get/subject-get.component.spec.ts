import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGetComponent } from './subject-get.component';

describe('SubjectGetComponent', () => {
  let component: SubjectGetComponent;
  let fixture: ComponentFixture<SubjectGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
