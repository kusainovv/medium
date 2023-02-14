import mongoose from 'mongoose';

const UserSchema = {
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true},
};

export const UserModel = mongoose.model('User', UserSchema);
