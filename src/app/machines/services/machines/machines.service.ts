import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel, Socket } from "phoenix";
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { scan, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { IEvent } from '../../models/event.model';
import { IMachine, IMachineList, IMachineRes } from '../../models/machines.model';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  eventsSubject = new ReplaySubject<any>();
  events$ = this.eventsSubject.asObservable().pipe(
    scan<IEvent, IEvent[]>((events, event) => [event, ...events], []),
  );
  socket: Socket;
  channel: Channel;

  constructor(private http: HttpClient) { }

  public getAllMachines(): Observable<IMachine[]> {
    return this.http.get<IMachineList>(environment.serverUrl + '/machines').pipe(
      map(res => res.data),
      switchMap(machineList => combineLatest([
        of(machineList),
        this.events$,
      ])),
      map(([machineList, events]) => {
        return machineList.map(machine => {
          const event = events.find(ev => ev.machine_id === machine.id);
          return {
            ...machine,
            status: event ? event.status : machine.status,
          };
        });
      }),
    );
  }

  public getMachine(machineId: string): Observable<IMachine> {
    return this.http.get<IMachineRes>(`${environment.serverUrl}/machines/${machineId}`).pipe(
      map(res => res.data),
      switchMap(machine => combineLatest([
        of(machine),
        this.events$.pipe(
          map(events => events.filter(ev => ev.machine_id === machine.id)),
          map(events => events[0]),
        ),
      ])),
      map(([machine, event]) => {
        return {
          ...machine,
          status: event ? event.status : machine.status,
          events: event ? [{timestamp: event.timestamp, status: event.status}, ...machine.events] : machine.events,
        };
      }),
    );
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
    this.eventsSubject.next({});
    this.channel.on('new', res => this.eventsSubject.next(res));
    this.events$.subscribe(ev => console.log(ev));
    this.channel.join();
  }

}
