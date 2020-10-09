import { Component, Input, OnInit } from '@angular/core';
import { MachineStatusBg } from '../../models/machine-status-color.map';
import { IMachine } from '../../models/machines.model';

@Component({
  selector: 'app-machine-list-dumb',
  templateUrl: './machine-list-dumb.component.html',
  styleUrls: ['./machine-list-dumb.component.scss']
})
export class MachineListDumbComponent implements OnInit {

  @Input() machineList: IMachine[];
  MachineStatusBg = MachineStatusBg;

  constructor() { }

  ngOnInit(): void {
  }

}
