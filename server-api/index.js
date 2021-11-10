const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');

const app = express();

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL)
	.then((res) => {
		console.log('MongoDB Connected');
	})
	.catch((err) => {
		console.log(err);
	});

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);

app.listen(8000, () => {
	console.log('Server connected');
});
