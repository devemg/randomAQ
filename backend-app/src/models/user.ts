import { Base } from "./base";

export interface User extends Base {
    username: string; 
    email: string; 
    rolId: string; 
}