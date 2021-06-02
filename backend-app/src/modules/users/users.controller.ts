import { Request, Response } from "express";
import { UsersRepository } from "./users.repository";
import { getJWToken } from "../../providers/jwt-provider";
import { ExceptionCode } from "../../const";

const repository: UsersRepository = new UsersRepository();
export class UsersController {
    

    /**
     * Register a new user and return a token 
     * @param request 
     * @param response 
     */
    register(request:Request,response:Response) {
        repository.newUser(request.body,true).then(res=>{
            const token = getJWToken(request.body.username,request.body.email);
            response.status(200).json({ token });
        })
        .catch(err=>{
            if(err.code == 'ConditionalCheckFailedException'){
                response.status(ExceptionCode.AwsException).json({ code:ExceptionCode.AlreadyExistException, message: 'Username already exists' })
            }else {
                response.status(ExceptionCode.AwsException).json(err.message)
            }   
        })
    }

    /**
     * check if the users credentials are valid
     * @param request 
     * @param response 
     */
    login(request:Request,response:Response) {
        repository.getUser(request.body.username).then(res=>{
            if(res.Item){
                if(res.Item.password == request.body.password){
                    const token = getJWToken(res.Item.username,res.Item.email);
                    response.status(200).json({ token });
                }else {
                    response.status(ExceptionCode.PasswordIncorrectException).send('Incorrect Password');
                }
            }else {
                response.status(ExceptionCode.NotFoundException).json('Username not found');
            }
        })
        .catch(err=>{
            response.status(ExceptionCode.AwsException).json(err.message)
        })
    }

    resetPassword(request:Request,response:Response) {

    }

}

    