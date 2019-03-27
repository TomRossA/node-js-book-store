'use strict';

var Book = require('../models/bookModel');
var storage = require('../../storage/storage');

var STORAGE_NAME = 'books';

exports.list_all_books = function(req, res) {
  var books = storage.getStorage(STORAGE_NAME);
  var allbooks = [];
  for (var id in books) {
    allbooks.push(books[id]);
  }
  res.json(allbooks);
};

exports.create_a_book = function(req, res) {
  var books = storage.getStorage(STORAGE_NAME);
  var new_book = new Book(req.body);
  var new_book_id = new_book.getId();
  books[new_book_id] = new_book;
  res.json(new_book);
};

exports.read_a_book = function(req, res) {
  var books = storage.getStorage(STORAGE_NAME);
  var book_id = req.params.bookId;
  if (books[book_id]) {
    res.json(books[book_id]);
  } else {
    res.send({ error: 'Book not found' });
  }
};

exports.update_a_book = function(req, res) {
  var books = storage.getStorage(STORAGE_NAME);
  var book_id = req.params.bookId;
  if (books[book_id]) {
    var item = books[book_id];
    for (var key in req.body) {
      item[key] = item[key] ? req.body[key] : item[key];
    }
    res.json(books[book_id]);
  } else {
    res.send({ error: 'Book not found' });
  }
};

exports.delete_a_book = function(req, res) {
  var books = storage.getStorage(STORAGE_NAME);
  var book_id = req.params.bookId;
  if (books[book_id]) {
    delete books[book_id];
    res.json({ id: book_id, message: 'Book successfully deleted' });
  } else {
    res.send({ error: 'Book not found' });
  }
};
