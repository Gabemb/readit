const express = require('express');
const router = express.Router();
const db = require('../models');

//models
const Post = db.Post;
const Comment = db.Comment;
const Vote = db.Vote;

////Callbacks////
const getAllPosts = ( (req, res) => {
	Post.findAll({
			//include: [Comment, Vote]
	})
	.then( (posts) => {
		console.log("I'm working!");
		res.send(posts);
	})
	.catch( (err) => {
		console.log("Something went wrong while trying to fetch all posts: ", err);
		res.sendStatus(500);
	})
});


/////Routes/////

router.route('/api/post')
	.get(getAllPosts)

module.exports = router;