import { Pipe, PipeTransform } from '@angular/core';
import { MachineStatus } from '../../models/machine-status.enum';
import { IMachine } from '../../models/machines.model';

@Pipe({
  name: 'machineByStatus'
})
export class MachineByStatusPipe implements PipeTransform {

  transform(machines: IMachine[], status: MachineStatus): IMachine[] {
    return machines ? machines.filter(machine => machine.status === status) : [];
  }

}
