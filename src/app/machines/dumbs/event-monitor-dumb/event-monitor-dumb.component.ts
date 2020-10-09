import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-monitor-dumb',
  templateUrl: './event-monitor-dumb.component.html',
  styleUrls: ['./event-monitor-dumb.component.scss']
})
export class EventMonitorDumbComponent implements OnInit {

  @Input() events: IEvent[];

  constructor() { }

  ngOnInit(): void {
  }

}
