import { Component, OnInit } from '@angular/core';
import { UserClientService } from "../../services/user/user-client.service";
import {SharedService} from "../../services/shared/shared.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  user = {};

  constructor(
    private activatedRoute : ActivatedRoute,
    private sharedService: SharedService,
    private userService: UserClientService) { }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.activatedRoute.params
      .subscribe(params => {
        this.user = this.sharedService.user || {};
      });
  }

}
