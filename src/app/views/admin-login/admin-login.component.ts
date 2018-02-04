import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router) { }

  login(username : String, password : String){
    this.router.navigate(['home']);
  }

  ngOnInit() {

  }

}
