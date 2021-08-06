import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName!: string;
  password: any;
  mouseoverLogin!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: any) {
    // console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancelBtn() {
    this.router.navigate(['events']);
  }
}
