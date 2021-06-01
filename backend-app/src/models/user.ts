import { Base } from "./base";

export interface User extends Base {
    username: string; 
    email: string; 
    isAuthorized: boolean; 
    confirmationCode?:string;
}

/**
 * status = 1 -> Active 
 * status = 0 -> Inactive
 */