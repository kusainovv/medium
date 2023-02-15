import React from 'react';
import {LogotypeShort} from '../../../../../../public/img/LogotypeShort';

export const ArticlesHeader = () => <header className={`
    p-3
    pr-10
    pl-10
    flex
    justify-between
    items-center
    border-b-2
    border-black/5

    max-s:pr-2
    max-s:pl-2
`}>
	<div className={`
        flex
        justify-between
        items-center

        max-s:justify-start
        max-s:w-full
    `}>
		<LogotypeShort />
		<input type={'text'} placeholder={'find smth'} className={`
            ml-5
            p-2
            max-w-[240px]
            rounded-lg
            box-border
            cursor-pointer
            transition-colors
            outline-none
            bg-zinc-100
            focus:text-black
            focus:ring-1
            placeholder:text-zinc-900
            max-s:ml-2
            max-s:w-full
        `} />
	</div>

	<div>
		<div className={`
            w-[32px]
            h-[32px]
            bg-amber-500
            rounded-full
        `}></div>
	</div>
</header>;
