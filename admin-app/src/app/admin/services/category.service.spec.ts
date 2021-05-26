import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { categoriesMock, imagesMock } from './mock-data-services.spec';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllCategories and return a list of categories', () => {
    service.getAllCategories().then(response => {
      expect(response.length).toBe(5);
      expect(response).toEqual(categoriesMock);
    });

    /*const req = httpMock.expectOne('http://localhost:3000/category')
    expect(req.request.method).toBe('GET');
    req.flush(categoriesMock);*/
  });


});
