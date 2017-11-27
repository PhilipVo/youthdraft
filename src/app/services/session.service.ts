import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { JwtHelper } from 'angular2-jwt';

import { HttpService } from './http.service';

@Injectable()
export class SessionService {
  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  private jwtHelper: JwtHelper = new JwtHelper();
  private _id: string;
  private _newUser: object = {};
  private _user: string;

  get id(): string { return this._id; }
  get newUser(): any { return this._newUser; }
  get user(): string { return this._user; }

  set newUser(data) { this._newUser = { ...this._newUser, ...data }; }

  login(user, data): Promise<any> {
    return this.http.post(`/${user}/login`, data)
      .then(youthdraftToken => {
        Cookie.set('youthdraftToken', youthdraftToken, undefined, '/');
        this.setSession(Cookie.get('youthdraftToken'));
      }).catch(error => Promise.reject(error));
  }

  logout(): void {
    // Clear user information:
    this._user = null;

    // Clear cookies:
    Cookie.delete('youthdraftToken', '/');
    const youthdraftToken: string = Cookie.get('youthdraftToken');

    // Navigate to index:
    this.router.navigate(['']);
  }

  registerCoach(): Promise<any> {
    return this.http.post('/coaches/register', this.newUser)
      .then(() => this._newUser = {})
      .catch(error => Promise.reject(error));
  }

  registerLeague(): Promise<any> {
    const formData = new FormData();

    Object.keys(this.newUser).map(key => {
      if (key === 'coaches' || key === 'teams' || key === 'players') {
        formData.append(key, this.newUser[key], this.newUser[key].name)
      } else if (key === 'tryouts') {
        formData.append(key, JSON.stringify(this.newUser.tryouts));
      } else formData.append(key, this.newUser[key]);
    });

    return this.http.postFormData(`/test`, formData)
      .then(() => this._newUser = {})
      .catch(error => Promise.reject(error));
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
        this._id = payload.id;
        this._user = payload.leagueId ? 'coach' : 'league';
      }
    } catch (error) {
      this.logout();
    }
  }

}
