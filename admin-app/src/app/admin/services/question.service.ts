import { Injectable } from '@angular/core';
import { APIService } from 'src/app/services/API.service';
import { Question } from '../models/question';
import { questionsMock } from './mock-data-services.spec';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apiService: APIService) { }

  /**
   * Get all questions
   */
  getAllQuestions():Promise<Question[]> {
    return new Promise( async (resolve:any,reject:any)=>{
      let response = await this.apiService.ListQuestions()
      let newResponse: Question[] = []; 
      if(response.items) {
        response.items.forEach(element => {
          if(element){
            newResponse.push({
              answer:element.answer,
              content:element.content,
              id:element.id,
              category: element.category,
              createdAt:element.createdAt,
              updatedAt:element.updatedAt
            });
          }
        });
      }else {
        reject('Categories not found')
      }
      resolve(newResponse);
    });
  }

  /**
   * Get question by id
   * id
   */
   getQuestion(id: string):Promise<Question> {
    return this.apiService.GetQuestion(id);
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
  saveQuestion(q:Question):Promise<any> {
    return this.apiService.CreateQuestion(q);
  }

  /**
   * Update question
   * @param q question
   */
   updateQuestion(id: string,q:Question):Promise<any> {
    return this.apiService.UpdateQuestion({...q, id });

  }


  /**
   * delete question
   * @param id
   */
   deleteQuestion(id: string):Promise<any> {
    return this.apiService.DeleteQuestion({ id });
  }

}