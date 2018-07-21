import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserClientService} from "../user/user-client.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private userService : UserClientService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    return undefined;//this.userService.loggedIn();
  }

  // canActivate() {
  //   return this.userService.loggedIn();
  // }

}
