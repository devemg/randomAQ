import { Router } from 'express';
import { middlewareToken } from '../../providers/jwt-provider';
import { CategoriesController } from './categories.controller';

export const categoryRoutes = Router();
const controller = new CategoriesController();

categoryRoutes.get('/', controller.getAllCategories);
categoryRoutes.get('/:id', controller.getCategoryById);

categoryRoutes.post('/', middlewareToken, controller.newCategory);
categoryRoutes.put('/', middlewareToken, controller.updateCategory);
categoryRoutes.delete('/:id', middlewareToken, controller.deleteCategory);
