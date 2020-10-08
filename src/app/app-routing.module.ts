import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedGuard } from './auth/guards/is-logged/is-logged.guard';
import { IsUnloggedGuard } from './auth/guards/is-unlogged/is-unlogged.guard';

const routes: Routes = [
  {
    canActivate: [IsUnloggedGuard],
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    canActivate: [IsLoggedGuard],
    path: '',
    loadChildren: () => import('./machines/machines.module').then(m => m.MachinesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
