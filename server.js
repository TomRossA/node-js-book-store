var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');
var storage = require('./storage/storage');

storage.addStorage('bookstores');
storage.addStorage('books');
storage.loadInitialData();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  next();
});

var bookRoutes = require('./api/routes/bookRoutes');
var bookStoreRoutes = require('./api/routes/bookStoreRoutes');
bookRoutes(app);
bookStoreRoutes(app);

app.listen(port);

console.log('node-js-book-store server started on: ' + port);
