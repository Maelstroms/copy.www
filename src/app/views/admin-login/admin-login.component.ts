import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClientService } from '../../services/user/user-client.service';
import {User} from '../../models/user.model.client';
import {SharedService} from "../../services/shared/shared.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private sharedService : SharedService,
    private userClientService : UserClientService,
    private router: Router
  ) { }

  login(){
    this.userClientService
      .login(this.username, this.password)
      .subscribe((user) => {
          this.sharedService.user = user;
          this.router.navigate(['home']);

      });
  }

  ngOnInit() {

  }

}
