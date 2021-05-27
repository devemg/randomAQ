import { Injectable } from '@angular/core';
import { APIService, Category, Question } from './API.service-amplify';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categories: Category[] = [
  ];

  question: Question[] = [
  ];

  constructor(private apiService: APIService) { }

  /**
   * Get list with all categories
   * @returns Categories list
   */
  getAllCategories(): Promise<Category[]> {
    return this.apiService.ListCategorys().then(res=>{
      return res.items;
    })
  }

  /**
   * Get category by id
   * @param id category
   * @returns category
   */
  getCategory(id: string): Promise<Category> {
    return this.apiService.GetCategory(id);
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
