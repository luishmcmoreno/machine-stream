import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel, Socket } from "phoenix";
import { Observable, ReplaySubject } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { IEvent } from '../../models/event.model';
import { IMachine, IMachineList } from '../../models/machines.model';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  eventsSubject = new ReplaySubject<any>();
  events$ = this.eventsSubject.asObservable().pipe(
    scan<IEvent, IEvent[]>((events, event) => [...events, event], []),
  );
  socket: Socket;
  channel: Channel;

  constructor(private http: HttpClient) { }

  public getAllMachines(): Observable<IMachine[]> {
    return this.http.get<IMachineList>(environment.serverUrl + '/machines').pipe(
      map(machineList => machineList.data),
    );
  }

  public getMachine(machineId: string): Observable<IMachine> {
    return this.http.get<IMachine>(`${environment.serverUrl}/machines/${machineId}`);
  }


  public openConnection(): void {
    this.socket = new Socket(environment.websocketUrl, {});
    this.socket.connect();
    this.watchEvents();
  }

  public closeConnection(): void {
    this.channel.leave();
    this.socket.disconnect();
  }

  private watchEvents(): void {
    this.channel = this.socket.channel('events');
    this.channel.on('new', res => this.eventsSubject.next(res));
    this.channel.join();
  }

}
