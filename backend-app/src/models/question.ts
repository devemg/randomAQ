import { Base } from "./base";
import { Category } from "./category";

export interface Question extends Base {
    category?:Category;
    questionCategoryId: string; 
    content: string; 
    answer: string; 
}