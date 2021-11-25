const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const router = express.Router();

// REGISTER

router.post('/register', async (req, res) => {
	try {
		const usernameExist = await User.findOne({ username: req.body.username });
		if (usernameExist) {
			return res.status(400).json('Username already taken');
		}

		const emailExist = await User.findOne({ email: req.body.email });
		if (emailExist) {
			return res.status(400).json('Email already exists');
		}

		const salt = await bcrypt.genSalt(10);
		const hashPass = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashPass
		});

		const user = await newUser.save();

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// LOGIN

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json('Wrong Credentials');

		const validatePass = await bcrypt.compare(req.body.password, user.password);
		!validatePass && res.status(400).json('Wrong Credentials');

		const { password, ...others } = user._doc;

		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
