var uuid = require('uuid');

function BookStore(params) {
    this.id = uuid.v4();
    this.name = params.name || '';
    this.lat = params.lat || '';
    this.long = params.long || '';
    this.about = params.about || '';
    this.books = [];
}

var p = BookStore.prototype;

p.getId = function() {
    return this.id;
}

p.getName = function() {
    return this.name;
}

p.getLocation = function() {
    return this.location;
}

p.getAbout = function() {
    return this.about;
}

p.getBooks = function() {
    return this.books;
}

module.exports = BookStore;