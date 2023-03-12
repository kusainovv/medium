import React from 'react';

type ErrorMessageProps = {
	errorMessage: string;
	isError: boolean;
};

export const ErrorMessage = (props: ErrorMessageProps) => <p className={`
    text-red-600
    text-base
    text-center
    ${props.isError ? 'opacity-1' : 'opacity-0'}
`}>
	{props.errorMessage}
</p>;
