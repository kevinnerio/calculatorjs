//jshint esversion:6
var express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

//get the home page
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//post the result from the calculator
app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var num3 = num1 * num2;
  console.log(num3);
  res.send("<h1>Calculator</h1><p>Result: " + num3 + "</p>");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
