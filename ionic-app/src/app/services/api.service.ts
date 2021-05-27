import { Injectable } from '@angular/core';
import { APIService, Category, Question } from './API.service-amplify';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  categories: Category[] = [
  ];

  question: Question[] = [
  ];

  constructor(private apiService: APIService, private localService: LocalStorageService) { }

  /**
   * Get list with all categories
   * @returns Categories list
   */
  getAllCategories(): Promise<Category[]> {
    return this.apiService.ListCategorys().then(res=>{
      console.log(res.items)
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

  setQuestion(questions: Question[]) {
    let question = this.getRandom(questions);
    this.localService.setQuestion(question);
  }

  getRandom(questions: Question[]): Question{
    let index = Math.floor(Math.random() * questions.length);
    return questions[index];
  }

}

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
