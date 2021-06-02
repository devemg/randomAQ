import { Request, Response } from "express";
import { ExceptionCode } from "../../const";
import { CategoriesRepository } from "./categories.repository";

const catRepository = new CategoriesRepository();
export class CategoriesController {
    

    /**
     * Get all categories
     * @param req 
     * @param res 
     */
    getAllCategories(request:Request, response:Response) {
        catRepository.getAll().then( (res)=>{
            response.status(200).json(res.Items);
        })
        .catch(err=>{
            response.status(ExceptionCode.AwsException).json(err.message)
        })
    }

    /**
     * Get one categories
     * @param req 
     * @param res 
     */
     getCategoryById(request:Request, response:Response) {
        catRepository.getOne(request.params.id).then( (res)=>{
            if(res.Item) {
                response.status(200).json(res.Item);
            }else {
                response.status(ExceptionCode.NotFoundException).json('Category not found');
            }
        })
        .catch(err=>{
            response.status(ExceptionCode.AwsException).json(err.message)
        })
    }

    /**
     * create new category
     * @param req 
     * @param res 
     */
     newCategory(request:Request, response:Response) {
        catRepository.create(request.body).then( (res)=>{
            response.status(200).json(res);
        })
        .catch(err=>{
            response.status(ExceptionCode.AwsException).json( err.message)
        })
    }

    /**
     * update category
     * @param req 
     * @param res 
     */
     updateCategory(request:Request, response:Response) {
        catRepository.update(request.body).then( (res)=>{
            if(res.Attributes) {
                response.status(200).json(res.Attributes);
            }else {
                response.status(ExceptionCode.NotFoundException).json("Category not found");
            }
        })
        .catch(err=>{
            if(err.code == 'ConditionalCheckFailedException'){
                response.status(ExceptionCode.NotFoundException).json("Category not found");
            }else{
                response.status(ExceptionCode.AwsException).json({  code:err.name, message: err.message })
            }
        })
    }

    /**
     * Get one categories
     * @param req 
     * @param res 
     */
     deleteCategory(request:Request, response:Response) {
        catRepository.delete(request.params.id).then( (res)=>{
            if(res.Attributes) {
                response.status(200).json(res.Attributes);
            }else {
                response.status(ExceptionCode.NotFoundException).json("Category not found");
            }
        })
        .catch(err=>{
            response.status(ExceptionCode.AwsException).json(err.message)
        })
    }
}