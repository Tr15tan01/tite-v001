var express = require('express')
var routes = express.Router();

routes.get('/file', function(req, res) {
    res.send('this is gile');
});

module.exports = routes;