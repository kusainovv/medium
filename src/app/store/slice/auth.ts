import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AuthService} from '../../http/services/AuthService';

export const compareToken = createAsyncThunk(
	'auth/compareToken',
	async (jwtToken: string) => {
		const response = AuthService.compareToken(jwtToken).then(response => ({
			email: `${response.data.email as string}`,
			password: `${response.data.password as string}`,
			jwtToken: `${response.data.jwtToken as string}`,
		})).catch(err => {
			throw new Error(`${err.response.data.errorMessage as string}`);
		});
		return response;
	},
);

export const submitForm = createAsyncThunk(
	'auth/submitForm',
	async (userInfo: {email: string; password: string}) => {
		const response = AuthService.submitForm(userInfo.email, userInfo.password).then(r => ({
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
			localStorage.setItem('jwtToken', `${action.payload.jwtToken}`);
		});

		builder.addCase(compareToken.rejected, state => {
			state.isAuth = false;
		});
	},
});

export const authReducer = authSlice.reducer;
