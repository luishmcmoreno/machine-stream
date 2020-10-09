import { MachineStatus } from './machine-status.enum';

export const MachineStatusColors = {
    [MachineStatus.Errored]: 'dc3545',
    [MachineStatus.Idle]: '17a2b8',
    [MachineStatus.Finished]: '007bff',
    [MachineStatus.Running]: '28a745',
    [MachineStatus.Repaired]: 'ffc107',
}

export const MachineStatusBg = {
    [MachineStatus.Errored]: 'danger',
    [MachineStatus.Idle]: 'info',
    [MachineStatus.Finished]: 'primary',
    [MachineStatus.Running]: 'success',
    [MachineStatus.Repaired]: 'warning',
}