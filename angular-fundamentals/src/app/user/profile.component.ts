import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isSaved: boolean = true;
  profileForm!: FormGroup;
  private firstName!: FormControl;
  private lastName!: FormControl;

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  saveProfile(formValue: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValue.firstName,
        formValue.lastName
      );
      this.route.navigate(['/events']);
    }
  }

  validateFirstName() {
    return this.firstName.valid && this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid && this.lastName.untouched;
  }

  cancelBtn() {
    this.route.navigate(['/events']);
  }
}
