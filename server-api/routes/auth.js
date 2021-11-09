const express = require('express');

const User = require('../models/User');

const router = express.Router();

// REGISTER

router.post('/register', async (req, res) => {
	try {
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// LOGIN

module.exports = router;
