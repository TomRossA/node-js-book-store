'use strict';

module.exports = function(app) {
  var bookStore = require('../controllers/bookStoreController');

  app
    .route('/bookstores')
    .get(bookStore.list_all_stores)
    .post(bookStore.create_a_store);

  app
    .route('/bookstores/:storeId')
    .get(bookStore.read_a_store)
    .put(bookStore.update_a_store)
    .delete(bookStore.delete_a_store);
};
