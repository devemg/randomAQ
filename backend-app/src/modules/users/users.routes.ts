import { Router } from 'express';
import { UsersController } from './users.controller';

export const usersRoutes = Router();
const controller = new UsersController();

usersRoutes.get('/register', controller.register);
usersRoutes.get('/login', controller.login);
usersRoutes.get('/reset-password', controller.resetPassword);
