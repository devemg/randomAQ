import { Request, Response } from "express";
import { UsersRepository } from "./users.repository";
import { enviroment } from "../../enviroment";
import { User } from "../../models/user";
import { getJWToken } from "../../providers/jwt-provider";

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
                response.status(400).json({message: 'Username already exists' })
            }else {
                response.status(400).json({message: err.message })
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
                    response.status(400).json({ message: 'Incorrect password' });
                }
            }else {
                response.status(404).json({ message: 'Username not found' });
            }
        })
        .catch(err=>{
            response.status(400).json({message: err.message })
        })
    }

    resetPassword(request:Request,response:Response) {

    }

}

    