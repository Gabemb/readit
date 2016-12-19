const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;

const Post = require('../models').Post;

//Post.sync will create the artists table
Post.sync({force: true})
//add the following posts to the database:
.then( () => Post.bulkCreate([
	{title: "Check out this crazy video!!!",
		body: "https://www.youtube.com/watch?v=Rp6-ZLaAkbE"},
	{title: "Need reading suggestions :)",
		body: "Hey guys, I'm currently training to be a secondary school history teacher (UK) and am moving on to my second in-school placement in January. Due to the state of the history department (new head of department/new curriculum) I need to learn some new topics on my own fairly quickly. I've had a look on the reading list and I can't seem to see any relevant books, I was wondering if anybody here could point me in the right direction on the following topics. The First British Empire 1603-1745, The Slave Trade 1745-1901, Inter-War Britain, The Second World War (I have some Evans and Kershaw but need a general overview and a British centric book), The Holocaust, Elizabethan England domestic and foreign problems, US Race Relations 1955-1968, Any help would be greatly appreciated :)"},
		{title: "So many friends and they're all Golden Retrievers!",
			body: "http://i.imgur.com/16szzeE.gifv"}
]))
//catch any errors during post creation
.catch( (err) => console.log(err) );