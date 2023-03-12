import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AuthService} from '../../http/services/AuthService';

export const popupSlice = createSlice({
	name: 'popup',
	initialState: {
		isPopup: false,
		isPopupMessanger: false,
	},
	reducers: {
		showPopup(state) {
			state.isPopup = true;
		},

		closePopup(state) {
			state.isPopup = false;
		},

		showMessanger(state) {
			state.isPopupMessanger = true;
		},

		closePopupMessanger(state) {
			state.isPopupMessanger = false;
		},
	},
});

export const {showPopup, showMessanger, closePopupMessanger, closePopup} = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
