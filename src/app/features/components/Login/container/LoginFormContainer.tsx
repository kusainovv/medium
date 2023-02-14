import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {submitForm, type RootState} from '../../../../store/slice/login';
import {LoginForm} from '../presentation/LoginForm';

export type LoginFormField = 'email' | 'password';

export const LoginFormContainer = () => {
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const isError = useSelector((state: RootState) => state.login.error.isError);
	const errorMessage = useSelector((state: RootState) => state.login.error.errorMessage);

	const submitLoginForm = () => {
		void dispatch(submitForm({email: loginForm.email, password: loginForm.password}));
	};

	const changeLoginField = (login_field: LoginFormField, text: string) => {
		setLoginForm(prevState => ({
			...prevState,
			[login_field]: text,
		}));
	};

	return <LoginForm
		loginForm={loginForm}
		isError={isError}
		errorMessage={errorMessage}
		submitLoginForm={submitLoginForm}
		changeLoginField={changeLoginField}
	/>;
};
