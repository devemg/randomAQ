import { Router } from 'express';
import { QuestionsController } from './questions.controller';

export const questionRoutes = Router();
const controller = new QuestionsController();

questionRoutes.get('/', controller.getAllQuestions);
questionRoutes.get('/:id', controller.getQuestionById);
questionRoutes.post('/', controller.newQuestion);
questionRoutes.put('/', controller.updateQuestion);
questionRoutes.delete('/:id', controller.deleteQuestion);
