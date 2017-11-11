import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { JwtHelper } from 'angular2-jwt';

import { HttpService } from './http.service';

@Injectable()
export class SessionService {
  private _user: string;

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private http: HttpService,
    private router: Router,
  ) { console.log('loaded session') }

  get user(): string { return this._user; }

  login(user, data): Promise<any> {
    return this.http.post(`/${user}/login`, data)
      .then(youthdraftToken => {
        Cookie.set('youthdraftToken', youthdraftToken, undefined, '/');
        this.setSession(Cookie.get('youthdraftToken'));
      }).catch(error => Promise.reject(error));
  }

  // logout(relocate = true): void {
  logout(): void {
    // Clear user information:
    this._user = null;

    // Clear cookies:
    Cookie.deleteAll();
    const youthdraftToken: string = Cookie.get('youthdraftToken');
    console.log(youthdraftToken)


    // Navigate to index:
    this.router.navigate(['']);
  }

  register(user, data): Promise<any> {
    return this.http.post(`/${user}/login`, data)
      .then(youthdraftToken => {
        Cookie.set('youthdraftToken', youthdraftToken, undefined, '/');
        this.setSession(Cookie.get('youthdraftToken'));
      }).catch(error => Promise.reject(error));
  }

  setSession(youthdraftToken: string): void {
    try {
      // Logout if session is expired:
      if (this.jwtHelper.isTokenExpired(youthdraftToken))
        this.logout();
      else {
        // Parse paylod from token:
        const payload = this.jwtHelper.decodeToken(youthdraftToken);

        // Set user information:
        this._user = payload.leagueId ? 'coach' : 'league';
      }
    } catch (error) {
      this.logout();
    }
  }

}
