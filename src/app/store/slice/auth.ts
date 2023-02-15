import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../store';

export const compareToken = createAsyncThunk(
	'auth/compareToken',
	async (jwtToken: string) => {
		const response = axios.post('http://localhost:2020/api/login_token', {
			jwtToken,
		}).then(response => ({
			email: response.data.email,
			password: response.data.password,
			jwtToken: response.data.jwtToken,
		})).catch(err => {
			throw new Error(`${err.response.data.errorMessage as string}`);
		});

		return response;
	},
);

export const submitForm = createAsyncThunk(
	'auth/submitForm',
	async (userInfo: {email: string; password: string}) => {
		const response = axios.post('http://localhost:2020/api/login', {
			email: `${userInfo.email}`,
			password: `${userInfo.password}`,
		}, {
			withCredentials: true,
		}).then(r => ({
			jwtToken: `${r.data.jwtToken as string}`,
		})).catch(err => {
			throw new Error(`${err.response.data.errorMessage as string}`);
		});

		return response;
	},
);

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: false,

		error: {
			isError: false,
			errorMessage: '',
		},
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(submitForm.fulfilled, (state, action) => {
			state.error.isError = false;
			state.error.errorMessage = '';
			localStorage.setItem('jwtToken', `${action.payload.jwtToken}`);
		});

		builder.addCase(submitForm.rejected, (state, action) => {
			state.isAuth = false;
			state.error.isError = true;
			state.error.errorMessage = `${action.error.message!}`;
		});

		builder.addCase(compareToken.fulfilled, (state, action) => {
			state.isAuth = true;
			localStorage.setItem('jwtToken', `${action.payload.jwtToken as string}`);
		});

		builder.addCase(compareToken.rejected, (state, action) => {
			state.isAuth = false;
		});
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const authReducer = authSlice.reducer;
