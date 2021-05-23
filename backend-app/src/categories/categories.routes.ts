import { Router } from 'express';

export const categoryRoutes = Router();

categoryRoutes.get('/', (request, response) => {
    return response.json("Categories OK");
  });
