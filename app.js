const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre =require('./models/author');
Book =require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://muyiwa:Webproject2017@ds139219.mlab.com:39219/muyiwa');
var db = mongoose.connection;

//port

//const port = process.env.PORT || 8080;
const port = 3002;
app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/author');
});

app.get('/api/authors', (req, res) => {
	Author.getAuthors((err, authors) => {
		if(err){
			throw err;
		}
		res.json(authors);
	});
});

app.post('/api/authors', (req, res) => {
	var author = req.body;
	Author.addAuthor(author, (err, author) => {
		if(err){
			throw err;
		}
		res.json(author);
	});
});

app.put('/api/authors/:_id', (req, res) => {
	var id = req.params._id;
	var author = req.body;
	Author.updateAuthor(id, author, {}, (err, author) => {
		if(err){
			throw err;
		}
		res.json(author);
	});
});

app.delete('/api/authors/:_id', (req, res) => {
	var id = req.params._id;
	Author.removeAuthor(id, (err, author) => {
		if(err){
			throw err;
		}
		res.json(author);
	});
});

app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.listen(port);console.log('Running on port 3000...');
console.log('Running on port 3000...');

