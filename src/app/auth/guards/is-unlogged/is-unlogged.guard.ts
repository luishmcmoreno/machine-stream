import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { LoginService } from '../../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class IsUnloggedGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canActivate(): Observable<boolean> {
    return this.loginService.user$.pipe(
      first(),
      map(user => !user),
      tap((isUnlogged) => {
        if (!isUnlogged) {
          this.router.navigate(['/']);
        }
      }),
    );
  }

}
