import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {type RootState} from '../../../../../store/store';
import {ArticleItem} from '../ArticleItem';
import {ArticleProfile} from './ArticleProfile';

export const ArticlesGrid = () => {
	const articles = useSelector((state: RootState) => state.articles.articles);
	return <div className={`
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
					articles.map(value => <React.Fragment key={value}>
						<Link to={`/articles/${value.id}`}>
							<ArticleItem title={value.title} description={value.description} tag={value.tag} community={value.community} />
						</Link>
					</React.Fragment>)
				}
			</div>
		</div>

		<ArticleProfile />
	</div>;
};
