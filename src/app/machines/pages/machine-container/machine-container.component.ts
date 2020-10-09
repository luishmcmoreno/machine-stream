import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginService } from '../../../auth/services/login/login.service';
import { MachinesService } from '../../services/machines/machines.service';

@Component({
  selector: 'app-machine-container',
  templateUrl: './machine-container.component.html',
  styleUrls: ['./machine-container.component.scss']
})
export class MachineContainerComponent implements OnInit, OnDestroy {

  $eventsCount = this.machineService.events$.pipe(map(events => events.length - 1));

  constructor(
    private loginService: LoginService,
    private router: Router,
    private machineService: MachinesService,
  ) { }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  private initializeSocket(): void {
    this.machineService.openConnection();
  }

  private closeSocket(): void {
    this.machineService.closeConnection();
  }

  ngOnInit(): void {
    this.initializeSocket();
  }

  ngOnDestroy(): void {
    this.closeSocket();
  }

}
