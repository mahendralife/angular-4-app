import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators, Form, NgModel  } from '@angular/forms';
import { User } from './dataModel';
import { UserInfo } from '../model/userInfo';

// class GlobalSettings {
//   public name: string;
//   public authToken: string;
//   public someOtherGlobalValue: number;
// }

@Component({
  providers: [UserInfo],
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})

export class AppLoginComponent implements OnInit {
  user = new User();
  UserInfo = new UserInfo();
  hide = true;
  form;
  constructor( ) { }

  submitForm(form) {
    console.log(form);
    console.log(this.user);

    if (form.valid) {
      // submit form
      this.UserInfo.name = 'sdfdsfds';
      console.log(this.UserInfo);
    }
  }
  ngOnInit() {
    this.form = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    });
  }

}
