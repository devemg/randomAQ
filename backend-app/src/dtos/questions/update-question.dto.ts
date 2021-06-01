import { NewQuestionDto } from "./new-question.dto";

export interface UpdateQuestionDto extends NewQuestionDto {
    id: string;
}