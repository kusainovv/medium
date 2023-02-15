import {api} from '../api';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthService {
	static async submitForm(email: string, password: string) {
		return api.post('/api/login', {
			email: `${email}`,
			password: `${password}`,
		});
	}

	static async compareToken(jwtToken: string) {
		return api.post('/api/access_token', {
			jwtToken,
		});
	}
}
