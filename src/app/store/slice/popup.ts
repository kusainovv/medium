import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AuthService} from '../../http/services/AuthService';

export const popupSlice = createSlice({
	name: 'popup',
	initialState: {
		isPopup: false,
	},
	reducers: {
		showPopup(state) {
			state.isPopup = true;
		},

		closePopup(state) {
			state.isPopup = false;
		},
	},
});

export const {showPopup, closePopup} = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
