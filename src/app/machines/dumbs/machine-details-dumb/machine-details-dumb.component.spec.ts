import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDetailsDumbComponent } from './machine-details-dumb.component';

describe('MachineDetailsDumbComponent', () => {
  let component: MachineDetailsDumbComponent;
  let fixture: ComponentFixture<MachineDetailsDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineDetailsDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDetailsDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
