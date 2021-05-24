import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localService: LocalStorageService) { }

  login(user: string, password: string) {
    this.localService.setAuthToken('123');
  }

  logout() {
    this.localService.removeAuthToken();
  }

}
