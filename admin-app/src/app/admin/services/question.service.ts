import { Injectable } from '@angular/core';
import { APIService, CreateQuestionInput, CreateQuestionMutation, DeleteQuestionMutation, GetQuestionQuery, ModelQuestionConditionInput, ModelQuestionFilterInput, UpdateQuestionInput, UpdateQuestionMutation } from '../../services/API.service';
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
      if(response.items) {
        resolve(response.items);
      }else {
        reject('Categories not found')
      }
    });
  }

  /**
   * Get question by id
   * id
   */
   getQuestion(id: string):Promise<GetQuestionQuery> {
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
  saveQuestion(input: CreateQuestionInput):Promise<CreateQuestionMutation> {
    return this.apiService.CreateQuestion(input);
  }

  /**
   * Update question
   * @param q question
   */
   updateQuestion(id: string,input: UpdateQuestionInput):Promise<UpdateQuestionMutation> {
    return this.apiService.UpdateQuestion({...input, id });

  }


  /**
   * delete question
   * @param id
   */
   deleteQuestion(id: string):Promise<DeleteQuestionMutation> {
    return this.apiService.DeleteQuestion({ id });
  }

}