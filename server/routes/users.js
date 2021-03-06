const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Post = require('../models/Post');

const router = express.Router();

// UPDATE

router.put('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		const user = await User.findById(req.params.id);
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		if (!req.body.username) {
			req.body.username = user.username;
		}
		if (!req.body.email) {
			req.body.email = user.email;
		}
		if (!req.body.password) {
			req.body.password = user.password;
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json('You can update only your Account!!');
	}
});

// DELETE

router.delete('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			try {
				await Post.deleteMany({ username: user.username });

				await User.findByIdAndDelete(req.params.id);

				res.status(200).json('User has been Deleted!');
			} catch (err) {
				res.status(500).json(err);
			}
		} catch (err) {
			res.status(404).json('User not found');
		}
	} else {
		res.status(401).json('You can Delete only your Account!!');
	}
});

// GET USER

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
