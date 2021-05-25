import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { NewUser } from '../models/new-user';
import { LogInUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localService: LocalStorageService) { 
  }

  /**
   * Register a new user in cognito
   * @param user 
   */
  async register(user: NewUser) {
    /*return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.email
      }
    });*/
  }

  changePassword() {

  }

  completePassword() {

  }

  /**
   * Login cognito user
   * @param user 
   * @param password 
   */
  async login(user: LogInUser) {
    this.localService.setAuthToken("1234");
    //return  Auth.signIn(user.username, user.password);
  }

  /**
   * logout cognito user
   */
  async logout() {
    try {
     // await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
    this.localService.removeAuthToken();
  }

}
