import { Base } from "./base";
import { Category } from "./category";

export interface Question extends Base {
    id?:string;
    category?:Category | null;
    content: string; 
    answer: string; 
}