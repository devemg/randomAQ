import { Router } from 'express';

export const questionRoutes = Router();

questionRoutes.get('/', (request, response) => {
    return response.json("Questions OK");
  });