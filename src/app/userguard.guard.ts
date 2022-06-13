import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({providedIn:'root'})

export class UserguardGuard implements CanActivate {
  constructor(private svc:UserService){

  }
  async canActivate() {
    if (this.svc.isLogged()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); (4)
      return false;
    }

  }
     
 
}
