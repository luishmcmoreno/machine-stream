import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMachineComponent } from './filter-machine.component';

describe('FilterMachineComponent', () => {
  let component: FilterMachineComponent;
  let fixture: ComponentFixture<FilterMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
