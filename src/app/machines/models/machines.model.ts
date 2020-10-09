import { MachineStatus } from "./machine-status.enum";
import { MachineType } from './machine-type.enum';

export interface IMachineList {
    data: IMachine[];
}

export interface IMachineRes {
    data: IMachine;
}

interface MachineEvents {
    timestamp: string,
    status: MachineStatus,
}

export interface IMachine {
    status: MachineStatus;
    machine_type: MachineType;
    longitude: number;
    latitude: number;
    last_maintenance: string;
    install_date: string;
    id: string;
    floor: number;
    events: MachineEvents[];
}