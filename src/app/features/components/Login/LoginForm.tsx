import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {submitForm, type RootState} from '../../../store/slice/login';

const Input = `
	w-full
	mb-1
	mt-1
	p-5
	rounded-md
	shadow-md
	box-border
	cursor-pointer
	transition-colors
	outline-none
	text-slate-400


	disabled:border-slate-200
	disabled:text-slate-500


	focus:border-slate-200
	focus:text-black
	focus:ring-1


	placeholder:text-slate-500


	invalid:text-red-700
	invalid:border-red-700
	invalid:ring-red-700
`;

export const LoginForm = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();

	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const isError = useSelector((state: RootState) => state.login.error.isError);
	const errorMessage = useSelector((state: RootState) => state.login.error.errorMessage);

	const changeLoginField = (login_field: keyof typeof loginForm, text: string) => {
		setLoginForm(prevState => ({
			...prevState,
			[login_field]: text,
		}));
	};

	return (
		<form className={`
			w-full
    		flex
    		flex-col
		`} onSubmit={e => {
			e.preventDefault();
			dispatch(submitForm(loginForm));
			return false;
		}}>
			<label className={`
					w-full
					cursor-pointer`}>
				<input
					aria-label={`${t('page.login.fields.email_label')}`}
					required
					value={loginForm.email}
					onChange={e => {
						changeLoginField('email', e.target.value);
					}}
					autoComplete='email'
					className={Input}
					type='email'
					placeholder={`${t('page.login.fields.email_placeholder')}`} />
				<span className={`
					hidden
					absolute
				`}>
					{t('page.login.fields.email_label')}
				</span>
			</label>

			<label className={`
        		w-full
    		`}>
				<input
					aria-label={`${t('page.login.fields.password_label')}`}
					required
					value={loginForm.password}
					onChange={e => {
						changeLoginField('password', e.target.value);
					}}
					autoComplete='current-password'
					className={Input}
					type='password'
					placeholder={`${t('page.login.fields.password_placeholder')}`} />
				<span className={`
            		hidden
            		absolute
        		`}>
					{t('page.login.fields.password_label')}
				</span>
			</label>

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
		</form>
	);
};
