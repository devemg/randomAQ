import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { questionsMock } from './mock-data-services.spec';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  /**
   * Get all questions
   */
  getAllQuestions():Promise<Question[]> {
    return this.http.get<Question[]>(`${environment.API_QUESTIONS}`).toPromise();
  }

  /**
   * Get question by id
   * id
   */
   getQuestion(id: string):Promise<Question> {
    return this.http.get<Question>(`${environment.API_QUESTIONS}/${id}`).toPromise();
  }

  /**
   * Get questions by category id
   * @param id
   */
   getQuestionByCategory(idCategory: string):Promise<Question[]> {
    return new Promise((resolve:any,reject:any)=>{
      resolve(questionsMock.filter(m=>m.category?.id == idCategory));
    });
  }

  /**
   * Save new question
   * @param q question
   */
  saveQuestion(input: Question):Promise<any> {
    return this.http.post(`${environment.API_QUESTIONS}`,JSON.stringify(input)).toPromise();
  }

  /**
   * Update question
   * @param q question
   */
   updateQuestion(id: string,input: Question):Promise<any> {
    return this.http.put(`${environment.API_QUESTIONS}`,JSON.stringify(input)).toPromise();
  }


  /**
   * delete question
   * @param id
   */
   deleteQuestion(id: string):Promise<any> {
    return this.http.delete(`${environment.API_QUESTIONS}/${id}`).toPromise();
  }

}