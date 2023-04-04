const express = require('express')
const app = express()
const port = 5051
const Gun = require('gun')
require('gun/axe');
var fs = require('fs');
var chmodr = require('chmodr');
var path='./testingDB'
app.use(Gun.serve)
const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})
chmodr('./testingDB', 777, (err) => {
  if (err) {
    console.log('Failed to execute chmod', err);
  } else {
    Gun({web: server, file: "./testingDB"});
    console.log('Success');
  }
});
