import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMachine } from '../../models/machines.model';
import { MachinesService } from '../../services/machines/machines.service';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent implements OnInit {

  @Input() id: string;
  machine$: Observable<IMachine>;

  constructor(
    private machineService: MachinesService,
  ) { }

  ngOnInit(): void {
    this.machine$ = this.machineService.getMachine(this.id);
  }

}
