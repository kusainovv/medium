import bcrypt, {compareSync} from 'bcrypt';
import jwt from 'jsonwebtoken';
import {UserModel} from '../models/User.js';

// Root@gmail.com
// root
class AuthController {
	async login(req, res) {
		const hashPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
		const userInfo = {email: req.body.email, password: hashPassword};

		const user = await UserModel.findOne({email: userInfo.email});
		const isCorrectPassword = compareSync('root', userInfo.password);

		if (user === null) {
			res.status(403).json({errorMessage: 'Not exists'});
		} else if (isCorrectPassword) {
			const accessToken = jwt.sign(userInfo, 'special_word', {expiresIn: '10m'});
			res.status(200).json({jwtToken: accessToken});
		} else if (!isCorrectPassword) {
			res.status(403).json({errorMessage: 'Wrong password'});
		}
	}
}

export const authController = new AuthController();
