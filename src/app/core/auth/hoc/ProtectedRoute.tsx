import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React from 'react';
import {useEffect, type ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Navigate, redirect, useLocation, useNavigate} from 'react-router-dom';
import {compareToken} from '../../../store/slice/auth';

export const ProtectedRoute: React.FC<{children: ReactNode}> = ({children}) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(compareToken(localStorage.getItem('jwtToken'))).catch(() => {
			navigate('/login');
		});
	}, [isAuth]);

	return <>
		{children}
	</>;
};
