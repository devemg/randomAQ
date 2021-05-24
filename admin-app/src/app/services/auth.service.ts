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
    Auth.configure({
      userPoolId:'us-east-1_hPVsDYBCG',
			userPoolWebClientId:'44bignuc1ghp4cp8sn3v5alf6k',
			region: 'us-east-1',
			//oauth,
			//identityPoolId: '',
			//mandatorySignIn,
			//refreshHandlers,
			//identityPoolRegion,
			//clientMetadata,
    });
  }

  /**
   * Register a new user in cognito
   * @param user 
   */
  async register(user: NewUser) {
    try {
      const newUser  = await Auth.signUp({
          username: user.username,
          password: user.password,
          attributes: {
            email: user.email
          }
      });
      console.log(newUser);
    } catch (error) {
        console.log('error signing up:', error);
    }
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
