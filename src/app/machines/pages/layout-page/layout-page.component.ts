import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login/login.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
