
class ArticlesController {
	async getArticles(req, res) {
		res.send({
			articles: [
				{
					id: '1',
					title: '1',
					description: 'Probably solution. If you will google this question you will find the answer in StackOverflow.',
					tag: 'Frontend',
					community: 'Publsished in Dev Genius',
				},
				{
					id: '2',
					title: '2',
					description: 'Probably solution. If you will google this question you will find the answer in StackOverflow.',
					tag: 'Frontend',
					community: 'Publsished in Dev Genius',
				},
			],
		});
	}
}

export const articlesController = new ArticlesController();
