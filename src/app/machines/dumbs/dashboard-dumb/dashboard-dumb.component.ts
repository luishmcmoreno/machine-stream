import { Component, Input, OnInit } from '@angular/core';
import { MachineStatus } from '../../models/machine-status.enum';
import { IMachine } from '../../models/machines.model';

@Component({
  selector: 'app-dashboard-dumb',
  templateUrl: './dashboard-dumb.component.html',
  styleUrls: ['./dashboard-dumb.component.scss']
})
export class DashboardDumbComponent implements OnInit {

  @Input() machines: IMachine[];
  MachineStatus = MachineStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
