import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { questionsMock } from './mock-data-services.spec';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get all questions
   */
  getAllQuestions():Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${environment.URL_API}/question`);
  }

  /**
   * Get question by id
   * id
   */
   getQuestion(id: string):Observable<Question> {
    return this.httpClient.get<Question>(`${environment.URL_API}/question/${id}`);
  }

  /**
   * Get questions by category id
   * @param id
   */
   getQuestionByCategory(idCategory: string):Observable<Question[]> {
    return new Observable(observer=>{
      observer.next(questionsMock.filter(m=>m.category?.id == idCategory));
    });
  }

  /**
   * Save new question
   * @param q question
   */
  saveQuestion(q:Question):Observable<any> {
    return this.httpClient.post(`${environment.URL_API}/question`,JSON.stringify(q));
  }

  /**
   * Update question
   * @param q question
   */
   updateQuestion(q:Question):Observable<any> {
    return this.httpClient.put(`${environment.URL_API}/question`,JSON.stringify(q));

  }


  /**
   * delete question
   * @param id
   */
   deleteQuestion(id: number):Observable<any> {
    return this.httpClient.delete(`${environment.URL_API}/question/${id}`);

  }

}