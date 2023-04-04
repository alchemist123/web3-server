// in the index.js file
var CronJob = require('cron').CronJob;
const express = require('express')
const app = express()
const port = 5050
const Gun = require('gun')
const fs = require('fs')
var cronJob1 = new CronJob({

  cronTime: '0 0 0 * * *',
  onTick: function () {
    fs.rmSync('./radata', { recursive: true });
    console.log("done fs")
  },
  start: true,
  runOnInit: false
});
app.use(Gun.serve)

const server = require('http').createServer().listen(5050);

Gun({ web: server })
