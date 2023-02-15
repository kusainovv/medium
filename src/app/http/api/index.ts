/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

const API_URL = 'http://localhost:2020';

export const api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('jwtToken')!}`;
	return config;
});
