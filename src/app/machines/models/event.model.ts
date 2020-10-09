import { MachineStatus } from "./machine-status.enum";

export interface IEvent {
  timestamp: string;
  status: MachineStatus;
  machine_id: string;
  id: string;
}