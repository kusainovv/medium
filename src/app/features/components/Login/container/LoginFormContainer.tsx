import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {submitForm, type RootState} from '../../../../store/slice/login';
import {LoginForm} from '../presentation/LoginForm';

export type LoginFormField = 'email' | 'password';

export const LoginFormContainer = () => {
	const dispatch = useDispatch();
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const isError = useSelector((state: RootState) => state.login.error.isError);
	const errorMessage = useSelector((state: RootState) => state.login.error.errorMessage);

	const submitLoginForm = () => {
		dispatch(submitForm(loginForm));
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
