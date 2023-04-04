const express = require('express')
const Gun = require('gun')

const app = express()

app.use(Gun.serve)
app.use(express.static(__dirname))

const server = app.listen(8080, () => {
  console.log('Gun server is running on port 8080')
})

Gun({ web: server })
