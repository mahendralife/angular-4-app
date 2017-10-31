import { Component, OnInit } from '@angular/core';
import { User } from './dataModel';
import {FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { ControlValueAccessor, NgModel, NgModelGroup } from '@angular/forms';
import { UserInfo } from '../model/userInfo';

@Component({
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.scss']
})
export class AppSignupComponent implements OnInit {
  user = new User();
  UserInfo = new User();

  constructor() { }

  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  nameControl = new FormControl('', [Validators.required]);

  submitForm () {
    console.log(this.user);
  }
  ngOnInit() {
  }

}
