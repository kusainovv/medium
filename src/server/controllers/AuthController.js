/* eslint-disable no-negated-condition */
/* eslint-disable capitalized-comments */
import bcrypt, {compareSync} from 'bcrypt';
import jwt from 'jsonwebtoken';
import {UserModel} from '../models/User.js';

// root@gmail.com
// root
class AuthController {
	async login(req, res) {
		const hashPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
		const userInfo = {email: req.body.email, password: hashPassword};

		const user = await UserModel.findOne({email: userInfo.email});
		const isCorrectPassword = compareSync('root', userInfo.password);
		if (user === null) {
			res.status(403).json({errorMessage: 'error.wrong_email'});
		} else if (isCorrectPassword) {
			const accessToken = jwt.sign({email: userInfo.email}, 'special_word');
			res.status(200).json({jwtToken: accessToken});
		} else if (!isCorrectPassword) {
			res.status(403).json({errorMessage: 'error.wrong_password'});
		} else {
			res.status(500).json({errorMessage: 'Что-то случилось'});
		}
	}

	async compareToken(req, res) {
		const decodedUserData = jwt.verify(req.body.jwtToken, 'special_word');
		const user = await UserModel.findOne({email: decodedUserData.email});

		if (user !== null) {
			const refreshToken = jwt.sign({email: decodedUserData.email, password: decodedUserData.password}, 'special_word');
			res.status(200).json({
				email: decodedUserData.email,
				password: decodedUserData.password,
				jwtToken: refreshToken,
			});
		}
	}
}

export const authController = new AuthController();
