import { Injectable } from '@angular/core';
import { Category } from 'src/models/category';
import { Question } from 'src/models/question';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categories: Category[] = [
  ];

  question: Question[] = [
  ];

  constructor(private http:HttpClient, private localService: LocalStorageService) { }

  /**
   * Get list with all categories
   * @returns Categories list
   */
  getAllCategories(): Promise<Category[]> {
    return this.http.get<Category[]>(`${environment.API_CATEGORIES}`).toPromise();
  }

  /**
   * Get category by id
   * @param id category
   * @returns category
   */
  getCategory(id: string): Promise<Category> {
    return this.http.get<Category>(`${environment.API_CATEGORIES}/${id}`).toPromise();
  }

  /**
   * Get next question
   * @returns Question
   */
  getQuestion(): Promise<Question> {
    return new Promise((resolve,reject)=>{
      let q = this.localService.getQuestion();
      if(q){
        resolve(q);
      }else {
        reject('No hay pregunta');
      }
    })
  }

  setQuestion(categoryId: string): Promise<any>{
    return this.http.get(`${environment.API_QUESTIONS}/random/${categoryId}`).toPromise().then((res:Question)=>{
      this.localService.setQuestion(res);
    });
  }

}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
