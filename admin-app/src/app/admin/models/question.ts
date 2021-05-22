import { Category } from "./category";

export interface Question {
    id?:number;
    category?:Category;
    content: string; 
    answer: string; 
}