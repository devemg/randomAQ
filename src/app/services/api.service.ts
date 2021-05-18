import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categories: Category[] = [
    { id: 1, name:'Princesas', image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png'},
    { id: 2, name:'Marvel', image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/048-dinosaur_zwnajr.png'},
    { id: 3, name:'Películas Clásicas', image:'https://res.cloudinary.com/devemg/image/upload/v1621289167/randomAQ/category-icons/046-star_bgl6dj.png'},
    { id: 4, name:'Series', image:'https://res.cloudinary.com/devemg/image/upload/v1621289166/randomAQ/category-icons/033-dog_svymu2.png'},
    { id: 5, name:'Animales', image:'https://res.cloudinary.com/devemg/image/upload/v1621289165/randomAQ/category-icons/006-dolphin_ybq0hq.png'}
  ];
  constructor() { }

  /**
   * Get list with all categories
   * @returns Categories list
   */
  getAllCategories(): Category[] {
    return this.categories;
  }

}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
