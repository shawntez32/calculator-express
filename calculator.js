//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);

  var result = num1 + num2;
  response.send("The answer is " + result);
});

app.get("/contact", function(request, response){
  response.send('Contact me at musamarket@gmail.com');
});

app.listen(3000, function(){
  console.log('Server started on Port 3000!');
  console.log('..............................')
});
