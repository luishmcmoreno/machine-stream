import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../services/machines/machines.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {

  machine$ = this.machineService.getAllMachines();

  constructor(
    private machineService: MachinesService,
  ) { }

  ngOnInit(): void {
  }

}
