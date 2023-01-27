import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPostComponent } from './subject-post.component';

describe('SubjectPostComponent', () => {
  let component: SubjectPostComponent;
  let fixture: ComponentFixture<SubjectPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
