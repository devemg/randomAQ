import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: LocalStorageService; 
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/admin'};
  let routerMock = {navigate: jasmine.createSpy('navigate')};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [AuthGuard, { provide: Router, useValue: routerMock },]
    });
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(LocalStorageService);
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
    expect(guard).toBeTruthy();
  });

  it('should allow activate', () => {
    service.setAuthToken('123');
    expect(guard.canActivate(routeMock,routeStateMock)).toBeTrue();
  });

  it('should not allow activate and redirect to login', () => {
    expect(guard.canActivate(routeMock,routeStateMock)).toBeFalse();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

});
