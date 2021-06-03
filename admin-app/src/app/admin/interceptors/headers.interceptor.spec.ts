import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../services/category.service';
import { categoriesMock } from '../services/mock-data-services.spec';

import { HeadersInterceptor } from './headers.interceptor';

describe('HeadersInterceptor', () => {
  let service: CategoryService;
  let local: LocalStorageService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadersInterceptor,
      CategoryService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HeadersInterceptor,
        multi: true,
      },
      ],
      imports: [ HttpClientTestingModule ]
  }));

  beforeEach(()=>{
    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
    local = TestBed.inject(LocalStorageService);
  })

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
    const interceptor: HeadersInterceptor = TestBed.inject(HeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should not add an content-type header', () => {
    service.getAllCategories().then(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${environment.API_CATEGORIES}`);
    expect(httpRequest.request.headers.has('Content-type')).toEqual(false);
  });

  it('should add an content-type header', () => {
    service.newCategory(categoriesMock[0]).then(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${environment.API_CATEGORIES}`);
    expect(httpRequest.request.headers.has('Content-type')).toEqual(true);
  });

  it('should not add an Authorization header', () => {
    service.getAllCategories().then(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${environment.API_CATEGORIES}`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
  });

  it('should add an Authorization header', () => {
    local.setAuthToken('123');
    service.getAllCategories().then(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`${environment.API_CATEGORIES}`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });

});
