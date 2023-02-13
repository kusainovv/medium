import React, {type ReactNode} from 'react';

export const LoginWrapper: React.FC<{children: ReactNode}> = ({children}) => (
	<div className={`
		m-auto
		relative
		top-[50%]
		pr-1
		pl-1
		max-w-[400px]
		min-w-fit
		flex
		flex-col
		items-center
		-translate-y-2/3
	`}>
		{children}
	</div>
);
