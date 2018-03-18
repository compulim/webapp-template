'use strict';

var _dotenv = require('dotenv');

(0, _dotenv.config)();

if (typeof process.env.DEBUG === 'undefined') {
  process.env.DEBUG = '*';
}