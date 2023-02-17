import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ArticlesService} from '../../http/services/ArticlesService';

export const getArticles = createAsyncThunk(
	'articles/getArticles',
	async () => {
		const response = ArticlesService.getArticles().then(r => ({
			articles: Array(r.data.articles),
		})).catch(err => {
			throw new Error(`${err.response.data.errorMessage as string}`);
		});
		return response;
	},
);

export const articlesSlice = createSlice({
	name: 'articles',
	initialState: {
		articles: [],
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getArticles.fulfilled, (state, action) => {
			state.articles = Array(action.payload.articles);
		});

		builder.addCase(getArticles.rejected, (state, action) => {
			// Here is error
		});
	},
});

export const articlesReducer = articlesSlice.reducer;
