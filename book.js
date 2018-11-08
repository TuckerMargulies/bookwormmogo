var mongoose = require ('mongoose'),
    Schema       = mongoose.Schema;


/// schema /////
var bookSchema = new Schema({
    isbn: {type: String},
    title: {type: String},
    author: {type: String},
    date: {type: Date},
    student: {type: String},


  });

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
