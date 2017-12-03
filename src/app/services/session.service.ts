import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable()
export class SessionService {
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) { }

  private _id: string;
  private _newUser: object = {};
  private _user: string;

  get id(): string { return this._id; }
  get newUser(): any { return this._newUser; }
  get user(): string { return this._user; }

  set newUser(data) {
    this._newUser = data === null ? {} : { ...this._newUser, ...data };
  }

  logout(): void {
    // Clear user information:
    this._id = null;
    this._user = null;

    // Clear cookies:
    Cookie.delete('youthdraftToken', '/');
    const youthdraftToken: string = Cookie.get('youthdraftToken');

    // Navigate to index:
    this.router.navigate(['']);
  }

  setSession() {
    const youthdraftToken = Cookie.get('youthdraftToken');
    if (youthdraftToken) {
      // Logout if session is expired:
      if (this.jwtHelper.isTokenExpired(youthdraftToken))
        this.logout();
      else {
        // Parse paylod from token:
        const payload = this.jwtHelper.decodeToken(youthdraftToken);

        // Set user information:
        this._id = payload.id;
        this._user = payload.leagueId ? 'coach' : 'league';
      }
    }
  }

}
