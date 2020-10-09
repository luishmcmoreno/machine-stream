import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLocationDumbComponent } from './machine-location-dumb.component';

describe('MachineLocationDumbComponent', () => {
  let component: MachineLocationDumbComponent;
  let fixture: ComponentFixture<MachineLocationDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineLocationDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLocationDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
