import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardComponent } from './project-card.component';

describe('projectCardComponent', () => {
  let component: projectCardComponent;
  let fixture: ComponentFixture<projectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ projectCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(projectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
