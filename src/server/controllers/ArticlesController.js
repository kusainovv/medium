
class ArticlesController {
	async getArticles(req, res) {
		res.send({
			articles: [
				{
					title: 'How to change SVG color dynamically',
					description: 'Probably solution. If you will google this question you will find the answer in StackOverflow.',
					tag: 'Frontend',
					community: 'Publsished in Dev Genius',
				},
				{
					title: 'How to change SVG color dynamically',
					description: 'Probably solution. If you will google this question you will find the answer in StackOverflow.',
					tag: 'Frontend',
					community: 'Publsished in Dev Genius',
				},
			],
		});
	}
}

export const articlesController = new ArticlesController();
