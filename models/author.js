const mongoose = require('mongoose');

// author Schema
const authorSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	age:{
		type: String,
		required: true
	},
	book:{
		type: [],
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Author = module.exports = mongoose.model('Author', authorSchema);

// Get Genres
module.exports.getAuthors = (callback, limit) => {
	Author.find(callback).limit(limit);
}

// Add Genre
module.exports.addAuthor = (author, callback) => {
	Author.create(author, callback);
}

// Update Genre
module.exports.updateAuthor = (id, author, options, callback) => {
	var query = {_id: id};
	var update = {
		name: author.name
	}
	Author.findOneAndUpdate(query, update, options, callback);
}


// Delete Genre
module.exports.removeAuthor = (id, callback) => {
	var query = {_id: id};
	Author.remove(query, callback);
}
