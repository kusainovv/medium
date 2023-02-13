import {createSlice} from '@reduxjs/toolkit';
import {type store} from '../store';

export const loginSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: false,

		error: {
			isError: false,
			errorMessage: '',
		},
	},
	reducers: {
		submitForm(state, payload) {
			console.log('');
		},

		loginSuccess(state) {
			state.isAuth = true;
		},

		loginReject(state, action) {
			state.isAuth = false;
			state.error.isError = true;
			state.error.errorMessage = `${(action.payload as string)}`;
		},
	},
});

export const loginReducer = loginSlice.reducer;
export const {loginReject, submitForm} = loginSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
