import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CategoryService } from './category.service';
import { categoriesMock, imagesMock } from './mock-data-services.spec';

fdescribe('CategoryService', () => {
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

   const req = httpMock.expectOne(`${environment.API_CATEGORIES}`)
    expect(req.request.method).toBe('GET');
    req.flush(categoriesMock);

  });

  it('should call getAllImages and return a list of images', () => {
    service.getImages().then(response => {
      expect(response.length).toBe(5);
      expect(response).toEqual(imagesMock);
    });
  });

  it('should call getCategory and return a category', () => {
    service.getCategory('1').then(response => {
      expect(response).toEqual(categoriesMock[0]);
    });

   const req = httpMock.expectOne(`${environment.API_CATEGORIES}/1`)
    expect(req.request.method).toBe('GET');
    req.flush(categoriesMock[0]);

  });

  it('should save category', () => {
    service.newCategory(categoriesMock[0]).then(response => {
      expect(response).toBeTruthy();
    });

   const req = httpMock.expectOne(`${environment.API_CATEGORIES}`)
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should update category', () => {
    service.updateCategory('1',categoriesMock[0]).then(response => {
      expect(response).toBeTruthy();
    });

   const req = httpMock.expectOne(`${environment.API_CATEGORIES}`)
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete question', () => {
    service.deleteCategory('1').then(response => {
      expect(response).toBeTruthy();
    });

   const req = httpMock.expectOne(`${environment.API_CATEGORIES}/1`)
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
