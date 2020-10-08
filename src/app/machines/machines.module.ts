import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesRoutingModule } from './machines-routing.module';
import { MachineListPageComponent } from './pages/machine-list-page/machine-list-page.component';
import { MachineDetailsPageComponent } from './pages/machine-details-page/machine-details-page.component';
import { EventMonitorPageComponent } from './pages/event-monitor-page/event-monitor-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FilterMachineComponent } from './features/filter-machine/filter-machine.component';
import { MachineListComponent } from './features/machine-list/machine-list.component';
import { MachineDetailsComponent } from './features/machine-details/machine-details.component';
import { EventMonitorComponent } from './features/event-monitor/event-monitor.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MachineListDumbComponent } from './dumbs/machine-list-dumb/machine-list-dumb.component';
import { MachineDetailsDumbComponent } from './dumbs/machine-details-dumb/machine-details-dumb.component';
import { DashboardDumbComponent } from './dumbs/dashboard-dumb/dashboard-dumb.component';
import { EventMonitorDumbComponent } from './dumbs/event-monitor-dumb/event-monitor-dumb.component';
import { MachineContainerComponent } from './pages/machine-container/machine-container.component';


@NgModule({
  declarations: [
    MachineListPageComponent,
    MachineDetailsPageComponent,
    EventMonitorPageComponent,
    DashboardPageComponent,
    FilterMachineComponent,
    MachineListComponent,
    MachineDetailsComponent,
    EventMonitorComponent,
    DashboardComponent,
    MachineListDumbComponent,
    MachineDetailsDumbComponent,
    DashboardDumbComponent,
    EventMonitorDumbComponent,
    MachineContainerComponent,
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
  ],
})
export class MachinesModule { }
