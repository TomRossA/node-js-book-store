'use strict';

var BookStore = require('../models/bookStoreModel');
var storage = require('../../storage/storage');

var STORAGE_NAME = 'bookstores';

exports.list_all_stores = function(req, res) {
    var bookstores = storage.getStorage(STORAGE_NAME);
    var allstores = [];
    for(var id in bookstores) {
        allstores.push(bookstores[id]);
    }
    res.json(allstores);
};

exports.create_a_store = function(req, res) {
    var bookstores = storage.getStorage(STORAGE_NAME);
    var new_store = new BookStore(req.body);
    var new_store_id = new_store.id();
    bookstores[new_store_id] = new_store;
    res.json(new_store);
};

exports.read_a_store = function(req, res) {
    var bookstores = storage.getStorage(STORAGE_NAME);
    var store_id = req.params.storeId;
    if (bookstores[store_id]) {
        res.json(bookstores[store_id]);
    } else {
        res.send({error: 'Book store not found'});
    }
};

exports.update_a_store = function(req, res) {
    var bookstores = storage.getStorage(STORAGE_NAME);
    var store_id = req.params.storeId;
    if (bookstores[store_id]) {
        bookstores[store_id] = new BookStore(req.body);
        res.json(bookstores[store_id]);
    } else {
        res.send({error: 'Book store not found'});
    }
};

exports.delete_a_store = function(req, res) {
    var bookstores = storage.getStorage(STORAGE_NAME);
    var store_id = req.params.storeId;
    if (bookstores[store_id]) {
        delete bookstores[store_id];
        res.json({ message: 'Book store successfully deleted' });
    } else {
        res.send({error: 'Book store not found'});
    }
};