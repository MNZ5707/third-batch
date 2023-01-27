import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailesComponent } from './employee-detailes.component';

describe('EmployeeDetailesComponent', () => {
  let component: EmployeeDetailesComponent;
  let fixture: ComponentFixture<EmployeeDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
