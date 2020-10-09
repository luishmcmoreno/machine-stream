import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineListDumbComponent } from './machine-list-dumb.component';

describe('MachineListDumbComponent', () => {
  let component: MachineListDumbComponent;
  let fixture: ComponentFixture<MachineListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineListDumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineListDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
