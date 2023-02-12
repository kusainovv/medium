import React from 'react';
import {useTranslation} from 'react-i18next';

export const App = () => {
	const {t} = useTranslation();
	t('');
	return <div>
		<h1 className={`
		text-amber-500
	`}>test</h1>
	</div>;
};
