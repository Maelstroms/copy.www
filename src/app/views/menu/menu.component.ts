import { Component, OnInit } from '@angular/core';
import { UserClientService } from "../../services/user/user-client.service";
import {SharedService} from "../../services/shared/shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //TODO add logout button to menu
  constructor(
    private userClientService : UserClientService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  logout() {
    this.userClientService.logout()
      .subscribe((status) => {
        this.router.navigate(['/home']);
      });
  }

  ngOnInit() {
  }

}
