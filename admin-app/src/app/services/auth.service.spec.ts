import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

describe('AuthService', () => {
  let service: AuthService;
  let localService: LocalStorageService;
  let httpMock: HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AuthService);
    localService = TestBed.inject(LocalStorageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and save token', () => {
    service.login({username:'user',password:'password'}).then(res=>{
      expect(res.token).toBeTruthy();
      localService.setAuthToken(res.token);
    }); 
    const req = httpMock.expectOne(`${environment.API_AUTH}/login`)
    expect(req.request.method).toBe('POST');
    req.flush({token:'1234'});  
  });

  it('should logout and remove token', async () => {
    await service.logout();
    expect(localService.isAuth()).toBeFalse();
  });

  it('should register user', () => {
    service.register({username:'user',password:'password',email:'email@email.com'}); 
    const req = httpMock.expectOne(`${environment.API_AUTH}/register`)
    expect(req.request.method).toBe('POST');
    req.flush({token:'1234'});
  });

  it('should confirm account', () => {
    service.confirmAccount('username','code'); 
    const req = httpMock.expectOne(`${environment.API_AUTH}`)
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should reset password', () => {
    service.resetPassword('username'); 
    const req = httpMock.expectOne(`${environment.API_AUTH}`)
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should save new password', () => {
    service.newPassword('username','password','code'); 
    const req = httpMock.expectOne(`${environment.API_AUTH}`)
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

});