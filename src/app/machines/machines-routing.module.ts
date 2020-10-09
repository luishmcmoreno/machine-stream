import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EventMonitorPageComponent } from './pages/event-monitor-page/event-monitor-page.component';
import { MachineContainerComponent } from './pages/machine-container/machine-container.component';
import { MachineDetailsPageComponent } from './pages/machine-details-page/machine-details-page.component';
import { MachineListPageComponent } from './pages/machine-list-page/machine-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: MachineContainerComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent,
      },
      {
        path: 'machine-list',
        component: MachineListPageComponent
      },
      {
        path: 'machine/:machineId/details',
        component: MachineDetailsPageComponent,
      },
      {
        path: 'event-monitor',
        component: EventMonitorPageComponent,
      },      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachinesRoutingModule { }
