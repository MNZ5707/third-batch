import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExamplesComponent } from './directive-examples.component';

describe('DirectiveExamplesComponent', () => {
  let component: DirectiveExamplesComponent;
  let fixture: ComponentFixture<DirectiveExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
