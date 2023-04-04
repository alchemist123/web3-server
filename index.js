const express = require('express')
const app = express()
const port = 5051
const Gun = require('gun')
require('gun/axe');
var fs = require('fs');

app.use(Gun.serve)
app.use(express.static('/gun'));
const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})
Gun({web: server, file: "./testingDb.json"});
