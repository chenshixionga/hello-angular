/*import { Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService  implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 取得用户访问的URL
    const url: string = state.url;
    return true;
  }
  loginWithCredentials(username: string, password: string): boolean {
    console.log(username + password);
    if (username === 'wangpeng') {
      return true;
    }else {
      return false;
    }
  }
}*/
import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
  loginWithCredentials(username: string, password: string): boolean {
    console.log(username + password);
    if (username === 'wangpeng') {
      return true;
    }else {
      return false;
    }
  }
}
