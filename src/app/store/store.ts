import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './slice/auth';
import {popupReducer} from './slice/popup';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		popup: popupReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
