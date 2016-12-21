const express = require('express');
const router = express.Router();
const db = require('../models');

//models
const Comment = db.Comment;

////Callbacks////

//GET all comments
const getAllComments = ( (req, res) => {
	Comment.findAll({})
	.then( (comments) => {
		res.send(comments);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	})
});

//POST new comment to database
const createComment = ( (req, res) => {
	Comment.create({
		body: req.body.body,
		PostId: JSON.parse(req.body.id)
	})
	.then( (newComment) => {
		res.send(newComment);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	})
});

//DEL comment from database
const deleteComment = ( (req, res) => {
	Comment.destroy({
		where: {id: req.body.id}
	})
	.then( () => {
		res.sendStatus(200);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	})
})

/////Router/////

router.route('/')
	.get(getAllComments)
	.post(createComment)
	.delete(deleteComment)

module.exports = router;