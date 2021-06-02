import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { NewUser } from '../models/new-user';
import { LogInUser } from '../models/login-user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import * as bcrypt from "bcryptjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hashSalt = 10; 

  constructor(private localService: LocalStorageService, private http: HttpClient) { 
  }

  /**
   * Register a new user in cognito
   * @param user 
   */
  async register(user: NewUser): Promise<any> {
   //const passwdHash = bcrypt.hashSync(user.password, this.hashSalt);
    //user.password = passwdHash;
    return this.http.post(`${environment.API_AUTH}/register`,JSON.stringify(user)).toPromise()
    .then((res:any)=>{
      this.localService.setAuthToken(res.token);
      return res;
    });
  }

  /**
   * Login cognito user
   * @param user 
   * @param password 
   */
  async login(user: LogInUser): Promise<any> {
    //const passwdHash = bcrypt.hashSync(user.password, this.hashSalt);
    //user.password = passwdHash;
    return this.http.post(`${environment.API_AUTH}/login`,JSON.stringify(user)).toPromise()
    .then((res:any)=>{
      this.localService.setAuthToken(res.token);
      return res;
    });;
  }

  /**
   * logout cognito user
   */
  async logout(): Promise<any> {
    return new Promise((resolve,reject)=>{
      this.localService.removeAuthToken();
      resolve(true);
    })
  }

  /**
   * Confirm account
   * @param username 
   * @param code 
   * @returns 
   */
  async confirmAccount(username: string, code: string) : Promise<any> {
    return this.http.post(``,JSON.stringify({username,code})).toPromise();
  }

  /**
   * Reset password
   */
  resetPassword(username: string): Promise<any> {
    return this.http.post(``,JSON.stringify(username)).toPromise();
  }

  newPassword(username: string, password: string, code: string): Promise<any> {
    return this.http.post(``,JSON.stringify({username,password,code})).toPromise();
  }
  

}
