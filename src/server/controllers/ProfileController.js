import bcrypt, {compareSync} from 'bcrypt';
import jwt from 'jsonwebtoken';
import {UserModel} from '../models/User.js';

// Root@gmail.com
// root
class ProfileController {
	async getProfile(req, res) {
		console.log(req.header.authorization);
		res.status(403).json({errorMessage: 'error.wrong_password'});
	}
}

export const profileController = new ProfileController();
