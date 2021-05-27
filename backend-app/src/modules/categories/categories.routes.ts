import { Router } from 'express';
import { CategoriesController } from './categories.controller';

export const categoryRoutes = Router();
const controller = new CategoriesController();

categoryRoutes.get('/', controller.getAllCategories);
categoryRoutes.get('/:id', controller.getCategoryById);
categoryRoutes.post('/', controller.newCategory);
categoryRoutes.put('/', controller.updateCategory);
categoryRoutes.delete('/:id', controller.deleteCategory);
