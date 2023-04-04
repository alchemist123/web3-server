const express = require('express')
const app = express()
const port = 5051
const Gun = require('gun')
require('gun/axe');
app.use(Gun.serve)
const server = require('http').createServer(Gun.serve(__dirname));

// Pass the validation function as isValid
const gun = Gun({
  file: 'data.json',
  web: server,
})

// Sync everything
gun.on('out', {get: {'#': {'*': ''}}})
server.listen(8000)
