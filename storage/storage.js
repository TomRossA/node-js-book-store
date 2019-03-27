'use strict';

var Book = require('../api/models/bookModel');
var BookStore = require('../api/models/bookStoreModel');
var fs = require('fs');

function Storage() {
  this._storage = {};
}

var p = Storage.prototype;

p.addStorage = function(name) {
  if (!this._storage[name]) {
    this._storage[name] = {};
  }
};

p.getStorage = function(name) {
  return this._storage[name];
};

p.setStorage = function(name, payload) {
  if (this._storage[name]) {
    this._storage[name] = payload;
  }
};

p.loadInitialData = function() {
  var self = this;
  fs.readFile(__dirname + '/initialdata.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    for (var key in data) {
      var initialdata = loadDataFromArray(key, data[key]);
      self.setStorage(key, initialdata);
    }
  });
};

function loadDataFromArray(key, array) {
  var res = {};
  var constructor = key === 'books' ? Book : BookStore;
  for (var index in array) {
    var params = array[index];
    var item = new constructor(params);
    res[item.getId()] = item;
  }
  return res;
}

module.exports = new Storage();
