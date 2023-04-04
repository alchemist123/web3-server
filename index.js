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
chmodr('./testingDB', 0o777, (err) => {
  if (err) {
    fs.access(path, (error) => {
   
      // To check if the given directory 
      // already exists or not
      if (error) {
        // If current directory does not exist
        // then create it
        fs.mkdir(path, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("New Directory created successfully !!");
          }
        });
      } else {
        console.log("Given Directory already exists !!");
      }
    });
    console.log('Failed to execute chmod', err);
  } else {
    Gun({web: server, file: "./testingDB"});
    console.log('Success');
  }
});
