// in the index.js file

const express = require('express')
const app = express()
const port = 5050
const Gun = require('gun')

app.use(Gun.serve)

const server = require('http').createServer().listen(5050);

Gun({ web: server })
