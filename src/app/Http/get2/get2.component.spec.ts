import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Get2Component } from './get2.component';

describe('Get2Component', () => {
  let component: Get2Component;
  let fixture: ComponentFixture<Get2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Get2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Get2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
