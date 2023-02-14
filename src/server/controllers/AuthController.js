import {UserModel} from '../models/User.js';

class AuthController {
	async login(req, res) {
		const userInfo = {email: req.body.email, password: req.body.password};
		console.log(userInfo);
		if (await UserModel.findOne({email: req.body.email})) {
			throw new Error('');
		}

		const user = await UserModel.create(userInfo);
		user.save();

		res.send({success: true});
		return 'test';
	}
}

export const authController = new AuthController();
