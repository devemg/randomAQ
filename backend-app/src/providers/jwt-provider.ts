import * as jwt  from "jsonwebtoken";
import { enviroment } from "../enviroment";
import { Response } from "express";
import { ExceptionCode } from "../const";

  /**
  * Get access token from jwt sign
  */
  export function getJWToken(username: string, email: string, isAuthorized: boolean) {
    const payload = {
        username,
        email,
        isAuthorized
       };
    return jwt.sign(payload,enviroment.jwt_secret_key || '', { expiresIn: 60*60*2 });
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
        return res.status(ExceptionCode.TokenExpiredException).json(err.message);    
      } else {
        req.payload = decoded;   
        if(req.payload.isAuthorized){
          next();
        }else {
          return res.status(ExceptionCode.UnauthorizedException).json('You are not authorized to make this change' ); 
        }
      }
    });
  } else {
    res.status(ExceptionCode.TokenNotFoundException).send('Token not found');
  }
}