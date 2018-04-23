var uuid = require('uuid');

function Book(params) {
    this.id = uuid.v4();
    this.title = params.title || '';
    this.author = params.author || '';
    this.isbn = params.isbn || '';
    this.about = params.about || '';
}

var p = Book.prototype;

p.getId = function() {
    return this.id;
}

p.getTitle = function() {
    return this.title;
}

p.getAuthor = function() {
    return this.author;
}

p.getIsbn = function() {
    return this.isbn;
}

p.getAbout = function() {
    return this.about;
}

p.update = function(params) {
    this.title = params.title || this.title;
    this.author = params.author || this.author;
    this.isbn = params.isbn || this.isbn;
    this.about = params.about || this.about;
}

module.exports = Book;