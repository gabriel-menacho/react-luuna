let storeCreator;
if (process.env.NODE_ENV === 'production') {
  storeCreator = require('./configureStore.prod');
} else {
  storeCreator = require('./configureStore.dev');
}

module.exports = storeCreator;
