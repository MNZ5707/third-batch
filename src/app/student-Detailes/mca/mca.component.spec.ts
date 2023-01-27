import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McaComponent } from './mca.component';

describe('McaComponent', () => {
  let component: McaComponent;
  let fixture: ComponentFixture<McaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
