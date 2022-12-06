var express = require('express');
var router = express.Router();
const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
	{
		text: 'Yo',
		user: 'Mickey',
		added: new Date(),
	},
	{
		text: 'Howre yall',
		user: 'Donald',
		added: new Date(),
	},
	{
		text: 'Sup!',
		user: 'Goofy',
		added: new Date(),
	},
];
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { messages: messages, title: 'Message Board' });
});

router.get('/new', (req, res) => {
	res.render('form');
});
router.post('/new', (req, res) => {
	console.log('heard');
	messages.push({
		text: req.body.message,
		user: req.body.user,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = router;
