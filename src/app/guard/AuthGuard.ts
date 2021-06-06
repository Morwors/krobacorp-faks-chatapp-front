// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from "../services/auth.service";
import {UserStore} from "../store/user.store";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public userStore: UserStore, public router: Router) {}
  canActivate(): boolean {
    if (!this.userStore.user) {
      // this.router.navigate(['login']);
      // return false;
      return true;
    }
    return true;
  }
}
