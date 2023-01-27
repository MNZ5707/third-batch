import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSampleOneComponent } from './project-sample-one.component';

describe('ProjectSampleOneComponent', () => {
  let component: ProjectSampleOneComponent;
  let fixture: ComponentFixture<ProjectSampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSampleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
