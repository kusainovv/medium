import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React, {useEffect, type ReactNode} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {compareToken} from '../../../store/slice/auth';
import {type RootState} from '../../../store/store';

export const ProtectedRoute: React.FC<{children: ReactNode}> = ({children}) => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('jwtToken')) {
			void dispatch(compareToken(`${localStorage.getItem('jwtToken')!}`));
		} else {
			navigate('/login');
		}
	}, [isAuth]);

	return <>
		{children}
	</>;
};
