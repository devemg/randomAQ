import { Router } from 'express';
import { UsersController } from './users.controller';

export const usersRoutes = Router();
const controller = new UsersController();

usersRoutes.post('/register', controller.register);
usersRoutes.post('/login', controller.login);
usersRoutes.post('/reset-password', controller.resetPassword);
