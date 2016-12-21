const express = require('express');
const router = express.Router();
const db = require('../models');

//models
const Post = db.Post;
const Comment = db.Comment;
const Vote = db.Vote;

////Callbacks////

//Find all posts
const getAllPosts = ( (req, res) => {
	Post.findAll({
			include: [Comment, Vote]
	})
	.then( (posts) => {
		res.send(posts);
	})
	.catch( (err) => {
		console.log("Something went wrong while trying to fetch all posts: ", err);
		res.sendStatus(500);
	})
});

//Create a new post
const createPost = ( (req, res) => {
	Post.create({
		title: req.body.title,
		body: req.body.body
	})
	.then( (newPost) => {
		res.send(newPost);
	})
	.catch( (err) => {
		console.log("Something went wrong while trying to create new a post: ", err);
		res.sendStatus(500);
	})
});

//Delete a post
const removePost = ( (req, res) => {
	Post.destroy({
		where: {id: req.body.id}
	})
	.then( () => {
		res.sendStatus(200);
	})
	.catch( (err) => {
		console.log("Something went wrong while trying to delete a post ", err);
		res.sendStatus(500);
	})
})

/////Router/////

router.route('/')
	.get(getAllPosts)
	.post(createPost)
	.delete(removePost)

module.exports = router;