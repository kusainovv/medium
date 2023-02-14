import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
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
			axios.post('http://localhost:2020/api/login', {
				email: `${payload.payload.email as string}`,
				password: `${payload.payload.password as string}`,
			}).then(response => {
				console.warn(response);
			}).catch(err => {
				console.warn(err.response.data.errorMessage);
			});
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
