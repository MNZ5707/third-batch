import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOneComponent } from './dropdown-one.component';

describe('DropdownOneComponent', () => {
  let component: DropdownOneComponent;
  let fixture: ComponentFixture<DropdownOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
