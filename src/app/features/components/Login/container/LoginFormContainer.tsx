import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {type RootState, submitForm} from '../../../../store/slice/auth';
import {LoginForm} from '../presentation/LoginForm';

export type LoginFormField = 'email' | 'password';

export const LoginFormContainer = () => {
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const isError = useSelector<any>((state: RootState) => state.auth.error.isError);
	const errorMessage = useSelector<any>((state: RootState) => state.auth.error.errorMessage);

	const dispatchLoginForm = () => {
		void dispatch(submitForm({email: loginForm.email, password: loginForm.password}));
	};

	const changeLoginField = (login_field: LoginFormField, text: string) => {
		setLoginForm(prevState => ({
			...prevState,
			[login_field]: text,
		}));
	};

	const submitLoginForm = () => {
		dispatchLoginForm();
		setLoginForm({
			email: loginForm.email,
			password: loginForm.password,
		});
	};

	return <LoginForm
		loginForm={loginForm}
		isError={isError}
		errorMessage={errorMessage}
		submitLoginForm={submitLoginForm}
		changeLoginField={changeLoginField}
	/>;
};
