import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategComponent } from './job.categ.component';

describe('JobCategComponent', () => {
  let component: JobCategComponent;
  let fixture: ComponentFixture<JobCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
