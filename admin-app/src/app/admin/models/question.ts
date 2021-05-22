import { Category } from "./category";

export interface Question {
    id?:number;
    category_id:number;
    category?:Category;
    content: string; 
    answer: string; 
}