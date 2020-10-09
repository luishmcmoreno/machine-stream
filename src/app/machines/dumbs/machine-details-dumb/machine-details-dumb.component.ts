import { Component, Input, OnInit } from '@angular/core';
import { MachineStatusBg } from '../../models/machine-status-color.map';
import { IMachine } from '../../models/machines.model';

@Component({
  selector: 'app-machine-details-dumb',
  templateUrl: './machine-details-dumb.component.html',
  styleUrls: ['./machine-details-dumb.component.scss']
})
export class MachineDetailsDumbComponent implements OnInit {

  @Input() machine: IMachine;
  MachineStatusBg = MachineStatusBg;

  constructor() { }

  ngOnInit(): void {
  }

}
