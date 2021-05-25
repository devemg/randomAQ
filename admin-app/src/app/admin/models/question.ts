import { Category } from "./category";

export interface Question {
    id?:string;
    category?:Category;
    content: string; 
    answer: string; 
}