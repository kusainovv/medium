import React from 'react';

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

type LoginFormInputProps = {
	fieldValue: string;
	fieldPlaceholder: string;
	label: string;
	changeLoginField: (field: string, text: string) => void;
	isError: boolean;
	type: string;
	errorMessage: string;
	autoComplete: string;
};

export const LoginFormInput = (props: LoginFormInputProps) => <label className={'w-full'}>
	<input
		aria-label={props.label}
		required
		value={props.fieldValue}
		onChange={e => {
			props.changeLoginField(props.type, e.target.value);
		}}
		autoComplete={props.autoComplete}
		className={Input}
		type={props.type}
		placeholder={props.isError && !props.type.length ? `${props.errorMessage}` : props.fieldPlaceholder} />
	<span className={`
            hidden
            absolute
        `}>
		{props.label}
	</span>
</label>;
