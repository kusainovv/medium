import {configureStore} from '@reduxjs/toolkit';
import {articlesReducer} from './slice/articles';
import {authReducer} from './slice/auth';
import {popupReducer} from './slice/popup';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		popup: popupReducer,
		articles: articlesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
