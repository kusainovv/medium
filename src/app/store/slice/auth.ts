import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

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
			localStorage.setItem('jwt_token', `${action.payload.jwtToken}`);
		});

		builder.addCase(submitForm.rejected, (state, action) => {
			state.isAuth = false;
			state.error.isError = true;
			state.error.errorMessage = `${action.error.message!}`;
		});
	},
});

export const authReducer = authSlice.reducer;
