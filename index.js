const express = require('express')
const app = express()
const port = 5050
const Gun = require('gun')
require('gun/axe');

app.use(Gun.serve)
app.use(express.static('/gun'));
const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})

Gun({web: server, file: "https://drive.google.com/drive/folders/1O9v8qLWoJxYjdD52rN3S84BJMrxaA2v8?usp=share_link"});
