import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeOpenComponent } from './dialoge-open.component';

describe('DialogeOpenComponent', () => {
  let component: DialogeOpenComponent;
  let fixture: ComponentFixture<DialogeOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
