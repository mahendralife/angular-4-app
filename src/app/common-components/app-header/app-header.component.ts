import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../model/userInfo';

@Component({
  selector: 'app-header',
  providers: [UserInfo],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  constructor(private isLogin: UserInfo) { }

  ngOnInit() {
    // this.isLogin = new UserInfo();
  }

}
