/////////////////////////
// Index page - import and organize all api routes. export for use in server
/////////////////////////
const router = require('express').Router();

router.use('/post', require('./postRouter.js'))
router.use('/comment', require('./commentRouter.js'))
router.use('/vote', require('./voteRouter.js'))

module.exports = router;
