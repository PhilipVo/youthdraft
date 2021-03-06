import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt'
import { Cookie } from 'ng2-cookies';

import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private session: SessionService
  ) { }

  canActivate(): boolean {
    const youthdraftToken = Cookie.get('youthdraftToken');

    if (youthdraftToken && this.jwtHelper.isTokenExpired(youthdraftToken)) {
      this.session.logout();
      return true;
    } else if (this.session.user) {
      this.router.navigate([`/${this.session.user}`]);
      return false;
    } else return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const youthdraftToken = Cookie.get('youthdraftToken');
    const url = state.url;

    if (url.includes('about') || url.includes('contact') || url.includes('faq') ||
      url.includes('reject') || url.includes('validate')) {
      return true;
    } else if ((url.includes('login') || url.includes('register') || url.includes('reset'))) {
      if (this.session.user) {
        this.router.navigate([`/${this.session.user}`]);
        return false;
      } else
        return true;
    } else if (youthdraftToken && !this.jwtHelper.isTokenExpired(youthdraftToken)) {
      if (url.includes(`${this.session.user}`))
        return true;
      else {
        this.router.navigate(['']);
        return false;
      }
    } else if (youthdraftToken && this.jwtHelper.isTokenExpired(youthdraftToken)) {
      this.session.logout();
      this.router.navigate(['']);
      return false;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}