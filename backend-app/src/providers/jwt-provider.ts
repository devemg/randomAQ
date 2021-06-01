import * as jwt  from "jsonwebtoken";
import { enviroment } from "../enviroment";
import { Response } from "express";

  /**
  * Get access token from jwt sign
  */
  export function getJWToken(username: string, email: string) {
    const payload = {
        username,
        email,
        isAuthorized: true
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