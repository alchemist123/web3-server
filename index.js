const express = require('express')
const app = express()
const port = 5050
const Gun = require('gun')
require('gun/axe');
var fs = require('fs');

app.use(Gun.serve)
app.use(express.static('/gun'));
const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})
fs.access('./testingDB', fs.constants.X_OK, (err) => {
  if (err) {
  console.log("%s doesn't exist");
 } else {
  Gun({web: server, file: "./testingDB"});
  console.log('can execute %s');
  }
 });
