import { Request, Response } from "express";
import { UsersRepository } from "./users.repository";
import * as jwt  from "jsonwebtoken";
import { enviroment } from "../../enviroment";

const repository: UsersRepository = new UsersRepository();
export class UsersController {
    

    register(request:Request,response:Response) {
        repository.newUser(request.body,true).then(res=>{
            const payload = {
                check:  true,
                username: request.body.username,
                email: request.body.email,
                isAuthorized: true
               };
               const token = jwt.sign(payload,enviroment.jwt_secret_key || '', { expiresIn: 1440 });
            response.status(200).json({ token });
        })
        .catch(err=>{
            response.status(400).json({message: err.message })
        })
    }

    login(request:Request,response:Response) {
        repository.getUser(request.body.username).then(res=>{
            response.status(200).json(res);
        })
        .catch(err=>{
            response.status(400).json({message: err.message })
        })
    }

    resetPassword(request:Request,response:Response) {

    }

}