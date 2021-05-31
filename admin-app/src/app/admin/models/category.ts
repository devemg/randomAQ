import { Base } from "./base";
import { Question } from "./question";

export interface Category extends Base{
    id?: string;
    name: string; 
    image: string;
    description: string;
    questions?: Question[];
}
