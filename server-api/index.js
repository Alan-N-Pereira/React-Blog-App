const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');

const app = express();

dotenv.config();
app.use(express.json);

mongoose
	.connect(process.env.MONGO_URL)
	.then((res) => {
		console.log('MongoDB Connected');
	})
	.catch((err) => {
		console.log(err);
	});

app.use('/api/auth', authRoute);

app.listen('3000', () => {
	console.log('Backend is Running');
});
