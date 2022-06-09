var faker = require("@faker-js/faker");
const { error } = require("console");
const mysql = require("mysql2");

var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("You've Reached The Home Page!")
});

app.get("/joke", function(req, res){
        res.send("!!!")
        console.log("answer from server");
});

app.get("/random", function(req, res){
    var num = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + num);
});
   

app.listen(8080, function(){
    console.log("Server running on 8080")
});