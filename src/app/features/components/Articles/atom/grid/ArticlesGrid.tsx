import React from 'react';
import {ArticleItem} from '../ArticleItem';
import {ArticleProfile} from './ArticleProfile';

export const ArticlesGrid = () => <div className={`
    mt-10
    grid
    grid-cols-[80%_20%]
    w-fit
    ml-auto
    mr-auto
    max-m:grid-cols-1
`}>
	<div className={`
        p-5
    `}>
		<h1 className={`
            text-5xl
        `}>Ratmir Kusainov</h1>

		<div className={`
            mt-10
        `}>
			{
				[1, 2, 3, 4, 5].map(value => <React.Fragment key={value}>
					<ArticleItem />
				</React.Fragment>)
			}
		</div>
	</div>

	<ArticleProfile />
</div>;
