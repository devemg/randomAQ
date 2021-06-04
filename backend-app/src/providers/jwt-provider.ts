import * as jwt  from "jsonwebtoken";
import { enviroment } from "../enviroment";
import { Response } from "express";

  /**
  * Get access token from jwt sign
  */
  export function getJWToken(username: string, email: string, isAuthorized: boolean) {
    const payload = {
        username,
        email,
        isAuthorized
       };
    return jwt.sign(payload,enviroment.jwt_secret_key || '', { expiresIn: 1440 });
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
        return res.status(401).json(err.message);    
      } else {
        req.payload = decoded;   
        if(req.payload.isAuthorized){
          next();
        }else {
          return res.status(403).json('You are not authorized to make this change' ); 
        }
      }
    });
  } else {
    res.status(401).send('Token not found');
  }
}