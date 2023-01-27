import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntwoComponent } from './dropdowntwo.component';

describe('DropdowntwoComponent', () => {
  let component: DropdowntwoComponent;
  let fixture: ComponentFixture<DropdowntwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowntwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdowntwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
