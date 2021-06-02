import { Base } from "./base";

export interface Category extends Base {
    name: string; 
    image: string;
    description?: string;
}
