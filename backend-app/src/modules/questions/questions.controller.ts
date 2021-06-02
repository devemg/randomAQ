import { Request, Response } from "express";
import { ExceptionCode } from "../../const";
import { Question } from "../../models/question";
import { CategoriesRepository } from "../categories/categories.repository";
import { QuestionsRepository } from "./questions.repository";

const qRepository = new QuestionsRepository();
const catRepository = new CategoriesRepository();

export class QuestionsController {
    

    /**
     * Get all Questions
     * @param req 
     * @param res 
     */
     getAllQuestions(request:Request, response:Response) {
        qRepository.getAll().then((res)=>{
            response.status(200).json(res.Items);
        })
        .catch(err=>{
            response.status(400).json({ code:err.name, message: err.message })
        })
    }

    /**
     * Get one Questions
     * @param req 
     * @param res 
     */
     getQuestionById(request:Request, response:Response) {
        qRepository.getOne(request.params.id).then( async (res)=>{
            if(res.Item){
                let category = (await catRepository.getOne(res.Item.questionCategoryId)).Item;
                res.Item.category = {
                    name: category.name,
                    id: category.id,
                    image: category.image
                }; 
                response.status(200).json(res.Item);
            }else {
                response.status(404).json({ code:ExceptionCode.NotFoundException, message:'Question not found'});
            }
        })
        .catch(err=>{
            response.status(400).json({ code:err.name, message: err.message })
        })
    }

    /**
     * create new Question
     * @param req 
     * @param res 
     */
     newQuestion(request:Request, response:Response) {
        qRepository.create(request.body).then( (res)=>{
            response.status(200).json(res);
        })
        .catch(err=>{
            response.status(400).json({ code:err.name, message: err.message })
        })
    }

    /**
     * update Question
     * @param req 
     * @param res 
     */
     updateQuestion(request:Request, response:Response) {
        qRepository.update(request.body).then( (res)=>{
            response.status(res.Attributes?200:404).json(res.Attributes?res.Attributes:{message:"Question not found"});
        })
        .catch(err=>{
            if(err.code == 'ConditionalCheckFailedException'){
                response.status(404).json({ code:ExceptionCode.NotFoundException, message:"Question not found"});
            }else{
                response.status(400).json({ code:err.name, message: err.message })
            }
        })
    }

    /**
     * Get one Questions
     * @param req 
     * @param res 
     */
     deleteQuestion(request:Request, response:Response) {
        qRepository.delete(request.params.id).then( (res)=>{
            response.status(res.Attributes?200:404)
            .json(res.Attributes?res.Attributes:{ code:ExceptionCode.NotFoundException, message:"Question not found"});
        })
        .catch(err=>{
            response.status(400).json({ code:err.name, message: err.message })
        })
    }

    /**
     * Get next question by category
     * @returns Question
     */
    getRandomQuestionByCategory(request:Request, response:Response) {
        qRepository.getAllByCategory(request.params.categoryId).then( async (res)=>{
            let question = getRandom(res.Items);
            response.status(200).json(question);
        })
        .catch(err=>{
            response.status(400).json({ code:err.name, message: err.message })
        })
    }
    
    /**
     * Get next question
     * @returns Question
     */
     getRandomQuestion(request:Request, response:Response) {
        qRepository.getAll().then( async (res)=>{
            let question = getRandom(res.Items);
            response.status(200).json(question);
        })
        .catch(err=>{
            response.status(400).json({ code:err.name, message: err.message })
        })
    }
    
    }

  /**
   * Get random of question array
   * @param questions 
   * @returns 
   */
   function getRandom(questions: Question[]): Question{
    let index = Math.floor(Math.random() * questions.length);
    return questions[index];
  }