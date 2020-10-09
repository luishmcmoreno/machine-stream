import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMachine } from '../../models/machines.model';
import { MachinesService } from '../../services/machines/machines.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  machines$: Observable<IMachine[]>;

  constructor(
    private machineService: MachinesService,
  ) { }

  ngOnInit(): void {
    this.machines$ = this.machineService.getAllMachines();
  }


}
