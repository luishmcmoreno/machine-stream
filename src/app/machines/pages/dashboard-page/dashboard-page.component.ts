import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../services/machines/machines.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private service: MachinesService,
  ) { }

  ngOnInit(): void {
  }

}
