import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginCredentials } from '../../models/login.model';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  public onLogin(credentials: ILoginCredentials): void {
    this.loginService.login(credentials);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
