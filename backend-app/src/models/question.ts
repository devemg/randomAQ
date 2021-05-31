import { Base } from "./base";
import { Category } from "./category";

export interface Question extends Base {
    id?:string;
    category?:Category;
    questionCategoryId: string; 
    content: string; 
    answer: string; 
}