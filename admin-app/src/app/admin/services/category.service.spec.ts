import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
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
    service.getAllCategories().subscribe(response => {
      expect(response.length).toBe(5);
      expect(response).toEqual(categoriesMock);
    });

    const req = httpMock.expectOne('http://localhost:3000/category')
    expect(req.request.method).toBe('GET');
    req.flush(categoriesMock);
  });

  it('should call getcategory with id = 1 and return the category', () => {
    service.getCategory(1).subscribe(response => {
      expect(response).toBeDefined();
      expect(response).toEqual(categoriesMock.find(m=>m.id == 1));
    });
  });

  it('should call newCategory and return a response', () => {
    service.newCategory({image:'url',name:'name',description:'desc'}).subscribe(response => {
      expect(response).toBeDefined();
    });
  });

  it('should call updateCategory and return a response', () => {
    service.updateCategory(categoriesMock[0]).subscribe(response => {
      expect(response).toBeTruthy();
    });
  });


  it('should call deleteCategory and return a response', () => {
    service.deleteCategory(1).subscribe(response => {
      expect(response).toBeTruthy();
    });
  });
  
  it('should call getImages and return a list of images to asign categories', () => {
    service.getImages().subscribe(response => {
      expect(response.length).toBe(5);
      expect(response).toEqual(imagesMock);
    });

    //cons req = httpMock.expectOne('')
    //expect(req.request.method).toBe('GET);
    //req.flush(categoriesMock);
  });

});
