import { Request, Response } from "express";
import { UsersRepository } from "./users.repository";

export class UsersController {
    repository: UsersRepository = new UsersRepository();

    register(request:Request,response:Response) {
        
    }

    login(request:Request,response:Response) {

    }

    resetPassword(request:Request,response:Response) {

    }

}