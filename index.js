const express = require('express');
const Gun = require('gun');

const app = express();

const gun = new Gun({
  file: './gun-data'
});

app.use('/', express.static(__dirname + '/public'));

const server = app.listen(5000, function() {
  console.log('Server listening on port 3000');
});