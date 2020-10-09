import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../services/machines/machines.service';

@Component({
  selector: 'app-event-monitor',
  templateUrl: './event-monitor.component.html',
  styleUrls: ['./event-monitor.component.scss']
})
export class EventMonitorComponent implements OnInit {

  public events$ = this.machineService.events$;

  constructor(
    private machineService: MachinesService,
  ) { }

  ngOnInit(): void {
  }

}
