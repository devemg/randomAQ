import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Auth } from '@aws-amplify/Auth';
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
    Auth.configure({
      userPoolId:'us-east-1_zB1UvrAap',
			userPoolWebClientId:'754ogk3q9aj8542ro960c8vjq8',
			region: 'us-east-1',
      mandatorySignIn:true
			//oauth,
			//identityPoolId: '',
			//refreshHandlers,
			//identityPoolRegion,
			//clientMetadata,
    });

    return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.email
      }
    });
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
    try {
      const currentUser = await Auth.signIn(user.username, user.password);
      console.log(currentUser)
    } catch (error) {
        console.log('error signing in', error);
    }
  }

  /**
   * logout cognito user
   */
  async logout() {
    try {
      await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
    this.localService.removeAuthToken();
  }

}
