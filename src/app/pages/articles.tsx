import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ArticlesInterface} from '../features/ui/articles';
import {getArticles} from '../store/slice/articles';

export const ArticlesPage = () => {
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();

	useEffect(() => {
		void dispatch(getArticles());
	}, []);

	return <ArticlesInterface />;
};
