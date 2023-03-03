
class ProfileController {
	async changeEmail(req, res) {
		res.send({
			articles: [
				{
					title: '1',
					description: 'Probably solution. If you will google this question you will find the answer in StackOverflow.',
					tag: 'Frontend',
					community: 'Publsished in Dev Genius',
				},
				{
					title: '2',
					description: 'Probably solution. If you will google this question you will find the answer in StackOverflow.',
					tag: 'Frontend',
					community: 'Publsished in Dev Genius',
				},
			],
		});
	}
}

export const profileController = new ProfileController();
