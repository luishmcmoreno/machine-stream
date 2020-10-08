import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMonitorPageComponent } from './event-monitor-page.component';

describe('EventMonitorPageComponent', () => {
  let component: EventMonitorPageComponent;
  let fixture: ComponentFixture<EventMonitorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMonitorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMonitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
