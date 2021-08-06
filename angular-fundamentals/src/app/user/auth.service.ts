import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser!: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Lam',
      lastName: 'Tai',
      userName: userName,
    };
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
