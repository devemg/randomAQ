import { Base } from "./base";

export interface User extends Base {
    username: string; 
    email: string; 
    isAuthorized: boolean; 
    confirmationCode?:string;
}
