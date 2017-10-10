var express = require('express');
var app = express();
var routes = require('./routes');

// define default for routes
app.use('/', routes);

// start server lsitening on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000')
});
