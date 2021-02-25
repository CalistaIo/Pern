// Connect database to server
const Pool = require('pg').Pool;
const config = require('./config.js');

const pool = new Pool(config); // include connection details in config object

module.exports = pool;




