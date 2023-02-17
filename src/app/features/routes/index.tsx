import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import {ProtectedRoute} from '../../core/routes/auth/ProtectedRoute';
import {ArticlesPage} from '../../pages/articles';
import {LoginPage} from '../../pages/login';

export const MainRouting = () => <Routes>
	<Route path='/' element={<ProtectedRoute>
		<Outlet />
	</ProtectedRoute>} />
	<Route path='login' element={<LoginPage />} />
	<Route path='articles' element={<ProtectedRoute>
		<ArticlesPage />
	</ProtectedRoute>} />
</Routes>;
