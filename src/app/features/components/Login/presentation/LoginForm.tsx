import React from 'react';
import {useTranslation} from 'react-i18next';
import {ErrorMessage} from '../../../../core/alert/ErrorMessage';
import {LoginFormInput} from '../atom/LoginFormInput';
import {type LoginFormField} from '../types/Login';

type LoginFormProps = {
	isError: boolean;
	errorMessage: string;
	loginForm: {email: string; password: string};
	submitLoginForm: () => void;
	changeLoginField: (login_field: LoginFormField, text: string) => void;
};

export const LoginForm = (props: LoginFormProps) => {
	const {t} = useTranslation();
	const {isError, changeLoginField, errorMessage, loginForm, submitLoginForm} = props;

	return (
		<form className={`
			w-full
    		flex
    		flex-col
		`} onSubmit={e => {
			e.preventDefault();
			submitLoginForm();
		}}>
			<LoginFormInput
				fieldValue={loginForm.email}
				label={`${t('page.login.fields.email_label')}`}
				changeLoginField={changeLoginField}
				type={'email'}
				autoComplete={'email'}
				isError={isError}
				errorMessage={errorMessage}
				fieldPlaceholder={`${t('page.login.fields.email_placeholder')}`}
			/>

			<LoginFormInput
				fieldValue={loginForm.password}
				label={`${t('page.login.fields.password_label')}`}
				changeLoginField={changeLoginField}
				type={'password'}
				autoComplete={'current-password'}
				isError={isError}
				errorMessage={errorMessage}
				fieldPlaceholder={`${t('page.login.fields.password_placeholder')}`}
			/>

			<span className={`
        		w-fit
				mt-2
				mb-5
				pl-1
				text-base
				text-zinc-400
				cursor-pointer
				underline
    		`}>
				{t('page.login.get_auth_data')}
			</span>

			<button className={`
				w-2/4
				m-auto
				mt-3
				p-2
				bg-green-500
				w-inherit
				text-white
				rounded-md
				pointer
    		`}>
				{t('page.login.submit_form')}
			</button>

			<ErrorMessage isError={isError} errorMessage={t(errorMessage)} />
		</form>
	);
};
