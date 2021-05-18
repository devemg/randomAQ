import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categories: Category[] = [
    { id: 1, name:'Princesas', image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/009-tulip_zxhh8e.png', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 2, name:'Marvel', image:'https://res.cloudinary.com/devemg/image/upload/v1621289168/randomAQ/category-icons/048-dinosaur_zwnajr.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 3, name:'Películas Clásicas', image:'https://res.cloudinary.com/devemg/image/upload/v1621289167/randomAQ/category-icons/046-star_bgl6dj.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 4, name:'Series', image:'https://res.cloudinary.com/devemg/image/upload/v1621289166/randomAQ/category-icons/033-dog_svymu2.png',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'},
    { id: 5, name:'Animales', image:'https://res.cloudinary.com/devemg/image/upload/v1621289165/randomAQ/category-icons/006-dolphin_ybq0hq.png', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor at faucibus id senectus posuere diam neque. Nulla adipiscing viverra pretium sit purus. Est, vel eget eget duis donec nunc neque semper. Scelerisque molestie commodo tellus porta facilisis dignissim.'}
  ];

  question: Question[] = [
    {id:1,content:'¿Cuál es mi princesa favorita?',answer:'Mulan'}
  ];

  constructor() { }

  /**
   * Get list with all categories
   * @returns Categories list
   */
  getAllCategories(): Category[] {
    return this.categories;
  }

  /**
   * Get category by id
   * @param id category
   * @returns category
   */
  getCategory(id: number): Category {
    return this.categories.find(element=>element.id == id);
  }

  /**
   * Get next question
   * @returns Question
   */
  getQuestion(): Question {
    return this.question[0];
  }

}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
