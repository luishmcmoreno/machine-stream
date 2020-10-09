import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoginCredentials } from '../../models/login.model';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static readonly LOCAL_STORAGE_KEY = 'machine-stream-user-loggedin';

  private userSubject = new BehaviorSubject<IUser>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
    this.loadUser();
  }

  public login(credentials: ILoginCredentials): void {
    const user = this.buildUser(credentials);
    localStorage.setItem(LoginService.LOCAL_STORAGE_KEY, JSON.stringify(user));
    this.userSubject.next(user);
  }

  public logout(): void {
    localStorage.removeItem(LoginService.LOCAL_STORAGE_KEY);
    this.userSubject.next(null);
  }

  public buildUser(credentials: ILoginCredentials): IUser {
    const username = credentials.email.split('@')[0];
    const initials = username.slice(0, 2);
    return {
      email: credentials.email,
      username,
      initials,
    }
  }

  private loadUser() {
    try {
      const user = JSON.parse(localStorage.getItem(LoginService.LOCAL_STORAGE_KEY));
      this.userSubject.next(user);
    } catch (e) {
      localStorage.removeItem(LoginService.LOCAL_STORAGE_KEY);
    }
  }

}
