import React from 'react';

export const ArticleItem = () => <div className={`
        mt-10
        mb-10
        p-5
        rounded-4xl
        shadow-lg
        cursor-pointer
    `}>
	<div>
		<p className={`
            text-sm
            mb-2
        `}>Publsished in Dev Genius</p>
		<div className={`
            flex
        `}>
			<div>
				<p className={`
                    font-bold
                    text-xl
                    mb-2
                `}>How to change SVG color dynamically</p>
				<p className={`
                    text-sm
                `}>
                    Probably solution. If you will google this question you will find the answer in StackOverflow.
				</p>
			</div>
			<div className={`
                w-[112px]
                ml-[60px]
              bg-amber-500
            `}></div>
		</div>

		<div className={`
            mt-5
            pr-2
            pt-1
            pb-1
            pl-2
            w-fit
            text-sm
            rounded-xl
            bg-gray-200
        `}>
			<p>Frontend</p>
		</div>
	</div>
</div>;
