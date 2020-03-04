var express = require('express');
var test = express.Router();

test.get('/test', function(req, res) {
  res.send('this is test');
})

module.exports = test;