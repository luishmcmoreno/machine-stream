import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMonitorDumbComponent } from './event-monitor-dumb.component';

describe('EventMonitorDumbComponent', () => {
  let component: EventMonitorDumbComponent;
  let fixture: ComponentFixture<EventMonitorDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMonitorDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMonitorDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
