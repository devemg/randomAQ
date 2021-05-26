import { Question } from "src/app/services/API.service";
import { Base } from "./base";

export interface Category extends Base{
    id?: string;
    name: string; 
    image: string;
    description: string;
    questions?: Question[];
}
