import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownoneComponent } from './dropdownone.component';

describe('DropdownoneComponent', () => {
  let component: DropdownoneComponent;
  let fixture: ComponentFixture<DropdownoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
