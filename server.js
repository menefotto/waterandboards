var express = require('express');
var path = require('path');
var compression = require('compression')

var app = express();

var modulesPath = path.resolve(__dirname, 'node_modules');
var publicPath = path.resolve(__dirname, 'lib');
var imagesPath = path.resolve(__dirname, 'src');

app.use(express.static(modulesPath));
app.use(express.static(publicPath));
app.use(express.static(imagesPath));

// And run the server
app.listen(8080, function () {
  console.log('Server running on port 8080');
});
