const express = require('express')
const app = express()
const port = 5051
const Gun = require('gun')
app.use(Gun.serve)
const server = require('http').createServer(Gun.serve(__dirname));

// Pass the validation function as isValid
const gun = Gun({
  file: 'data.json',
  web: server,
  localStorage: true,
  radisk: true,
  axe: true

})

// Sync everything
gun.on('out', {get: {'#': {'*': ''}}})
server.listen(8000)
