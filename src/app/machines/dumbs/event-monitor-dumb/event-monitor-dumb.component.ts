import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../models/event.model';
import { MachineStatusBg } from '../../models/machine-status-color.map';

@Component({
  selector: 'app-event-monitor-dumb',
  templateUrl: './event-monitor-dumb.component.html',
  styleUrls: ['./event-monitor-dumb.component.scss']
})
export class EventMonitorDumbComponent implements OnInit {

  @Input() events: IEvent[];
  MachineStatusBg = MachineStatusBg;

  constructor() { }

  ngOnInit(): void {
  }

}
