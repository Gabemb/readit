var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var apiRouter = require('./routes/api.js')
var db = require('./models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

app.use(apiRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelizeConnection.sync().then(function() {
	console.log("Everything's working! Yay! Listening on port 3000");
  app.listen(3000)
})
