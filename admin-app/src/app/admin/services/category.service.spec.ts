import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Category } from '../models/category';
import { Image } from '../models/image';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController; 

  let categoriesMock: Category[] = [
    { id: 1, name:'Princesas', image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 2, name:'Marvel', image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/048-dinosaur_zwnajr.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 3, name:'Películas Clásicas', image:'https://res.cloudinary.com/devemg/image/upload/v1621289167/randomAQ/category-icons/046-star_bgl6dj.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 4, name:'Series', image:'https://res.cloudinary.com/devemg/image/upload/v1621289166/randomAQ/category-icons/033-dog_svymu2.png',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 5, name:'Animales', image:'https://res.cloudinary.com/devemg/image/upload/v1621289165/randomAQ/category-icons/006-dolphin_ybq0hq.png', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'}
  ];

  let imagesMock: Image[] = [
    {
      name:'elephant',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/022-elephant_qzrskn.png',
      id:1
    },
    {
      name:'heart',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/021-heart_yu2e8e.png',
      id:2
    },
    {
      name:'crab',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289170/randomAQ/category-icons/020-crab_nbv3p5.png',
      id:3
    },
    {
      name:'boat',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289169/randomAQ/category-icons/019-boat_oai4ed.png',
      id:4
    },
    {
      name:'pig',
      url:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/010-pig_k5qkiw.png',
      id:5
    }
  ];

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

    //cons req = httpMock.expectOne('')
    //expect(req.request.method).toBe('GET);
    //req.flush(categoriesMock);
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
