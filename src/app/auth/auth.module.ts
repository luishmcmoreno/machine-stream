import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginDumbComponent } from './dumb/login-dumb/login-dumb.component';
import { LoginComponent } from './features/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent,
    LoginDumbComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: LoginPageComponent },
    ]),
  ]
})
export class AuthModule { }
