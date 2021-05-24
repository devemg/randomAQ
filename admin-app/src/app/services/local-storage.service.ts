import { Injectable } from '@angular/core';

export const LS_KEYS = {
  TOKEN: 'user-token'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
  constructor() { }

  /**
   * Set auth token
   * @param token 
   */
  setAuthToken(token: string) {
    localStorage.setItem(LS_KEYS.TOKEN,token);
  }

  /**
   * get auth token
   */
   getAuthToken(): string{
     let str = localStorage.getItem(LS_KEYS.TOKEN);
   return str?str:'';
  }

  /**
   * Check if the user is authenticated
   * @returns 
   */
  isAuth(): boolean {
    let str = localStorage.getItem(LS_KEYS.TOKEN);
    return str != null;
  }

  /**
   * remove auth token
   */
  removeAuthToken() {
    localStorage.removeItem(LS_KEYS.TOKEN);
  }


}
