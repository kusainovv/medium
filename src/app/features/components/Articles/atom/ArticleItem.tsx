import React from 'react';

type ArticleItemProps = {
	title: string;
	description: string;
	tag: string;
	community: string;
};

export const ArticleItem = (props: ArticleItemProps) => <div className={`
        mt-10
        mb-10
        p-5
        rounded-4xl
        shadow-lg
        cursor-pointer
    `}>
	<div>
		{
			props.community
            && <p className={`
                text-sm
                mb-2
            `}>Publsished in Dev Genius</p>
		}
		<div className={`
            flex
        `}>
			<div>
				<p className={`
                    font-bold
                    text-xl
                    mb-2
                `}>{props.title}</p>
				<p className={`
                    text-sm
                `}>
					{props.description}
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
			<p>{props.tag}</p>
		</div>
	</div>
</div>;
