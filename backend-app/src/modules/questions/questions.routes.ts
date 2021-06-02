import { Router } from 'express';
import { middlewareToken } from '../../providers/jwt-provider';
import { QuestionsController } from './questions.controller';

export const questionRoutes = Router();
const controller = new QuestionsController();

questionRoutes.get('/', controller.getAllQuestions);
questionRoutes.get('/random/:categoryId', controller.getRandomQuestionByCategory);
questionRoutes.get('/random', controller.getRandomQuestion);
questionRoutes.get('/:id', controller.getQuestionById);

questionRoutes.post('/', middlewareToken, controller.newQuestion);
questionRoutes.put('/', middlewareToken, controller.updateQuestion);
questionRoutes.delete('/:id', middlewareToken, controller.deleteQuestion);
