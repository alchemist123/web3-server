const express = require('express')
const app = express()
const port = 5050
const Gun = require('gun')
var CronJob=require('cron').CronJob;
const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);
app.use(rateLimit({
  windowMs: 30 * 1000, // 30 sec
  max: 1 // limit each IP to 100 requests per windowMs
}));

app.use(Gun.serve)
var cronJob1 = new CronJob({

  cronTime: '00 00 00 * * * ',
  onTick: async function () {
    console.log("hello")
    const directory = "radata";
    const files = await readdir(directory);
    const unlinkPromises = files.map(filename => unlink(`${directory}/${filename}`));
    Promise.all(unlinkPromises);

  //Your code that is to be executed on every midnight
  },
  start: true,
  runOnInit: false
});
const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`)
})

Gun({ web: server })
