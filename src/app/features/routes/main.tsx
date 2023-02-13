import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {withAuth} from '../../core/auth/hoc/withAuth';
import {ArticlesPage} from '../../pages/articles';
import {LoginPage} from '../../pages/login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		// Element: withAuth(ArticlesPage)
	},

	{
		path: '/login',
		element: <LoginPage />,
	},
]);

export const Routes = () => <RouterProvider router={router} />;
