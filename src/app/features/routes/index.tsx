import React from 'react';
import {Link, Outlet, Route, Routes} from 'react-router-dom';
import {ProtectedRoute} from '../../core/auth/hoc/ProtectedRoute';
import {ArticlesPage} from '../../pages/articles';
import {LoginPage} from '../../pages/login';

export const MainRouting = () => <Routes>
	<Route path='/' element={<ProtectedRoute>
		<Link to='login'>Login</Link>
		<Outlet />
	</ProtectedRoute>} />
	<Route path='login' element={<LoginPage />} />
	<Route path='about' element={<ArticlesPage />} />
</Routes>;
