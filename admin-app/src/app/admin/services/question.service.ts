import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { questionsMock } from './mock-data-services.spec';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  /**
   * Get all questions
   */
  getAllQuestions():Observable<Question[]> {
    return new Observable(observer=>{
      observer.next(questionsMock);
    });
  }

  /**
   * Get question by id
   * id
   */
   getQuestion(id: number):Observable<Question> {
    return new Observable(observer=>{
      observer.next(questionsMock.find(m=>m.id == id));
    });
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
    console.log(q)
    return new Observable(observer=>{
      observer.next(true);
    });
  }

  /**
   * Update question
   * @param q question
   */
   updateQuestion(q:Question):Observable<any> {
    console.log(q)
    return new Observable(observer=>{
      observer.next(true);
    });
  }


  /**
   * delete question
   * @param id
   */
   deleteQuestion(id: number):Observable<any> {
    return new Observable(observer=>{
      observer.next(true);
    });
  }

}
/**
 * return new Observable(observer=>{
      observer.next();
    });
 */
