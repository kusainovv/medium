
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfile = createAsyncThunk(
	'auth/submitForm',
	async () => {
		const response = axios.post('http://localhost:2020/api/profile', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt_token')!}`,
			},
		}).then(r => {
			console.warn(r);
		});

		return response;
	},
);

export const profileSlice = createSlice({
	name: 'profile',
	initialState: {
		email: '',
		password: '',
	},
	reducers: {

	},
});

export const profileReducer = profileSlice.reducer;
