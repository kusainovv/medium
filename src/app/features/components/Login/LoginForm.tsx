import React from 'react';
import {useTranslation} from 'react-i18next';

const Input = `
    w-full
    mb-1
    mt-1
    p-5
    rounded-md
    shadow-md
    box-border
    cursor-pointer
    disabled:border-slate-200
    disabled:text-slate-500
    focus:border-slate-200
    focus:text-black
    focus:ring-1
    transition-colors
    outline-none
    text-slate-400
    placeholder:text-slate-500
`;

export const LoginForm = () => {
	const {t} = useTranslation();

	return (
		<form className={`
			w-full
    		flex
    		flex-col
		`}>
			<label className={`
					w-full
					cursor-pointer`}>
				<input
					aria-label={`${t('page.login.fields.email_label')}`}
					required
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
