import React from 'react';
import {Login} from '../../components/Login';

export const LoginInterface = () => (
	<div className={'h-screen'}>
		<Login.Wrapper>
			<Login.Logotype />
			<Login.Form />
		</Login.Wrapper>
	</div>
);
