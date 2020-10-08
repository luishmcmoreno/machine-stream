import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDumbComponent } from './dashboard-dumb.component';

describe('DashboardDumbComponent', () => {
  let component: DashboardDumbComponent;
  let fixture: ComponentFixture<DashboardDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
