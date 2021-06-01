import { NewCategoryDto } from "./new-category.dto";

export interface UpdateCategoryDto extends NewCategoryDto {
    id: string;
}