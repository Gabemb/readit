const express = require('express');
const router = express.Router();
const db = require('../models');

//models
const Vote = db.Vote;

////Callbacks////

//GET all comments
const getAllVotes = ( (req, res) => {
	Vote.findAll({})
	.then( (comments) => {
		res.send(comments);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	})
});

//POST new vote to database
const createVote = ( (req, res) => {
	Vote.create({
		total: req.body.vote,
		PostId: JSON.parse(req.body.id)
	})
	.then( (newVote) => {
		res.send(newVote);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	})
});

//Add or subtract a single vote from a specific Post's total
const updateVote = ( (req, res) => {
	let total;
	Vote.findById(req.body.id)
	.then( (vote) => {
		total = vote.total
		return Vote.update({
			total: total + JSON.parse(req.body.vote)
		},{
			where: {id: req.body.id}
		})
	})
	.then( (updatedVote) => {
		res.send(updatedVote);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	})
});

//DEL vote from database
const deleteVote = ( (req, res) => {
	Vote.destroy({
		where: {id: JSON.parse(req.body.id)}
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
	.get(getAllVotes)
	.post(createVote)
	.put(updateVote)
	.delete(deleteVote)

module.exports = router;