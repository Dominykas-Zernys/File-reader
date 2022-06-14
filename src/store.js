const { configureStore } = require('@reduxjs/toolkit');
const reducer = require('./reducer');

const store = configureStore({ reducer });

module.exports = store;
