import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineListPageComponent } from './machine-list-page.component';

describe('MachineListPageComponent', () => {
  let component: MachineListPageComponent;
  let fixture: ComponentFixture<MachineListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
