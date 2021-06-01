import { v4 as uuid } from 'uuid';
import * as jwt  from "jsonwebtoken";
import { Response } from "express";
import { enviroment } from './enviroment';


/**
 * Generate a random code
 * @returns random code
 */
export function getRandomCode() : string {
    return "123";
}

/**
 * Generate a random id
 * @returns random id uuid v4
 */
export function getRandomId(): string {
    return uuid();
}

/**
 * Middleware to validate JWT
 * @param req 
 * @param res 
 * @param next 
 */
export function middlewareToken (req:any, res:Response, next:any) {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, enviroment.jwt_secret_key || '', (err:any, decoded:any) => {      
        if (err) {
          return res.status(401).json({ message: err.message });    
        } else {
          req.payload = decoded;    
          next();
        }
      });
    } else {
      res.status(401).send({ message: 'Token not found' });
    }
 }
