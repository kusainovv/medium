import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {submitForm} from '../../../../store/slice/auth';
import {type RootState} from '../../../../store/store';
import {LoginForm} from '../presentation/LoginForm';
import {type LoginFormField, type LoginFormFields} from '../types/Login';

export const LoginFormContainer = () => {
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();
	const navigate = useNavigate();
	const [loginForm, setLoginForm] = useState<LoginFormFields>({
		email: '',
		password: '',
	});

	const isError = useSelector((state: RootState) => state.auth.error.isError);
	const errorMessage = useSelector((state: RootState) => state.auth.error.errorMessage);

	const changeLoginField = (login_field: LoginFormField, text: string) => {
		setLoginForm(prevState => ({
			...prevState,
			[login_field]: text,
		}));
	};

	const submitLoginForm = () => {
		setLoginForm({
			email: '',
			password: '',
		});
		void dispatch(submitForm(loginForm)).then(response => {
			if (response.meta.requestStatus === 'fulfilled') {
				navigate('/articles');
			}
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
