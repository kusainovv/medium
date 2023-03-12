import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {route} from './routes/index.js';
import cookieParser from 'cookie-parser';
import http from 'http';
import {Server} from 'socket.io';

const app = express();

app.use(cors({
	credentials: true,
	origin: 'http://localhost:3030',
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api', route);

const server = http.createServer(app);

const MONGO_EMAIL = 'root';
const MONGO_PASSWORD = 'root';

const runServer = async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(`mongodb+srv://${MONGO_EMAIL}:${MONGO_PASSWORD}@main.uwwbqo8.mongodb.net/?retryWrites=true&w=majority`);
	} catch (err) {
		throw new Error(err);
	} finally {
		const io = new Server(server, {
			cors: {
				origin: 'http://localhost:3030',
				methods: ['GET', 'POST'],
			},
		});

		io.on('connection', socket => {
			socket.on('send_message', data => {
				socket.broadcast.emit('receive_message', data);
			});
		});

		server.listen(2020, () => {
			console.log('Listen...');
		});
	}
};

runServer();
