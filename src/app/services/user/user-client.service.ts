import { Injectable } from '@angular/core';
import { User } from '../../models/user.model.client';
import {
  HttpClient,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {Status} from "tslint/lib/runner";
import { SharedService } from "../shared/shared.service";
import {Router} from "@angular/router";


@Injectable()
export class UserClientService implements HttpInterceptor {

  //TODO go to https
  private readonly url = 'http://localhost:3000';

  constructor(private sharedService : SharedService,
              private http : HttpClient,
              private router : Router) { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    return undefined;
  }

  login(username, password){
    const credentials = {
      username : username,
      password: password
    };

    return this.http.post<User>(`${this.url}/api/login`, credentials);
  }

  loggedIn() {
    var user = this.http.post<Number>(`${this.url}/api/loggedin`, '');
    console.log(user);
    return user;
    // if (user !== 0){
    //   this.sharedService.user = user;
    //   return true;
    // }
    // else{
    //   this.router.navigate(['/']);
    //   return false;
    // }
  }

  logout(){

    return this.http.post<Status>(`${this.url}/api/logout`, '');
  }

}
