import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { NewUser } from '../models/new-user';
import { LogInUser } from '../models/login-user';
import Auth from '@aws-amplify/auth';

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
    return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.email
      }
    });
  }

  /**
   * Login cognito user
   * @param user 
   * @param password 
   */
  async login(user: LogInUser) {
    return  Auth.signIn(user.username, user.password).then(res=>{
      this.localService.setAuthToken(JSON.stringify(res.signInUserSession.accessToken));
    });
  }

  /**
   * logout cognito user
   */
  async logout() {
    return Auth.signOut().then(()=>{
      this.localService.removeAuthToken();
    });
  }

  /**
   * Confirm account
   * @param username 
   * @param code 
   * @returns 
   */
  async confirmAccount(username: string, code: string){
    return Auth.confirmSignUp(username,code);
  }

}
