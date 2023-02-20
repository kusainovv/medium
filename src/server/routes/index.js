import {Router} from 'express';
import {articlesController} from '../controllers/ArticlesController.js';
import {authController} from '../controllers/AuthController.js';
import {profileController} from '../controllers/ProfileController.js';

export const route = new Router();

route.post('/login', authController.login);
route.post('/access_token', authController.compareToken);
route.get('/articles', articlesController.getArticles);
route.post('/profile', profileController.changeEmail);
