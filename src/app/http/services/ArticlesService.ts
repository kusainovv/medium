import {api} from '../api';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ArticlesService {
	static async getArticles() {
		return api.get('/api/articles');
	}
}
