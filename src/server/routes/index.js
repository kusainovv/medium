import {Router} from 'express';
import {authController} from '../controllers/AuthController.js';

export const route = new Router();

route.post('/login', authController.login);
