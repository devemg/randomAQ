import { Base } from "./base";
import { Question } from "./question";

export interface Category extends Base{
    name: string; 
    image: string;
    description: string;
    questions?: Question[];
}
