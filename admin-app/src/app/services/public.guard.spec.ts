import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

import { PublicGuard } from './public.guard';

describe('PublicGuard', () => {
  let guard: PublicGuard;
  let service: LocalStorageService;
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/login'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ PublicGuard, { provide: Router, useValue: routerMock },],
    });
    guard = TestBed.inject(PublicGuard);
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

  it('should return false if the user is auth', () => {
    service.setAuthToken('123');
    expect(guard.canActivate(routeMock,routeStateMock)).toBeFalse();
  });

  it('should return true if the user is not auth', () => {
    expect(guard.canActivate(routeMock,routeStateMock)).toBeTrue();
  });

});
