import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';
import { IUsers } from './users';

@Injectable({ providedIn: 'root' })
export class userResolver implements Resolve<IUsers> {
  constructor(private service: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    //console.log(JSON.parse(route.paramMap.get('user')))
    // console.log("just testing");
    // { user: JSON.stringify(selectedrow)}
    const selectedrow = this.service.selectedbehaviourget;
    return selectedrow;
  }
}
