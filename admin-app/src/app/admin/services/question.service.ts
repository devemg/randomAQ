import { Injectable } from '@angular/core';
import { CreateQuestionInput, ModelQuestionConditionInput, ModelQuestionFilterInput } from 'src/API';
import { APIService, CreateQuestionMutation, DeleteQuestionMutation, GetQuestionQuery, UpdateQuestionInput, UpdateQuestionMutation } from 'src/app/services/API.service';
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
  getAllQuestions(filter?: ModelQuestionFilterInput,limit?: number):Promise<Question[]> {
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
              questionCategoryId: element.category?.image || '',
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
  saveQuestion(input: CreateQuestionInput, condition?: ModelQuestionConditionInput):Promise<CreateQuestionMutation> {
    return this.apiService.CreateQuestion(input,condition);
  }

  /**
   * Update question
   * @param q question
   */
   updateQuestion(id: string,input: UpdateQuestionInput,condition?: ModelQuestionConditionInput):Promise<UpdateQuestionMutation> {
    return this.apiService.UpdateQuestion({...input, id },condition);

  }


  /**
   * delete question
   * @param id
   */
   deleteQuestion(id: string):Promise<DeleteQuestionMutation> {
    return this.apiService.DeleteQuestion({ id });
  }

}