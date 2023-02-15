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
			res.status(403).json({errorMessage: 'error.wrong_email'});
		} else if (isCorrectPassword) {
			console.log(userInfo);
			const accessToken = jwt.sign(userInfo, 'special_word', {expiresIn: '100m'});
			res.status(200).json({jwtToken: accessToken});
		} else if (!isCorrectPassword) {
			res.status(403).json({errorMessage: 'error.wrong_password'});
		}
	}

	async compareToken(req, res) {
		const decodedUserData = jwt.verify(req.body.jwtToken, 'special_word');
		const user = await UserModel.findOne({email: decodedUserData.email});

		if (user !== null) {
			const refreshToken = jwt.sign({email: decodedUserData.email, password: decodedUserData.password}, 'special_word', {expiresIn: '100m'});
			res.status(200).json({
				email: decodedUserData.email,
				password: decodedUserData.password,
				jwtToken: refreshToken,
			});
		}
	}
}

export const authController = new AuthController();
