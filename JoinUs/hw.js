var faker = require("@faker-js/faker");
const { error } = require("console");
const mysql = require("mysql2");

var express = require('express');

var app = express();
var mysqll = require('mysql');

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "join_us",
    password: "Gg2A7Vyz"
  });


app.get("/", function(req, res){
    var q = "SELECT COUNT(*) as count FROM users"
    connection.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
      //  res.send("We have " + count + " users in our db")
        res.render("home", {count: count});
    });
    // res.send("You've Reached The Home Page!")
});

app.get("/joke", function(req, res){
    res.render("home");
});

app.get("/random", function(req, res){
    var num = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + num);
});

app.post("/register", function(req, res){
   var person = {
       email: req.body.email
   };

   connection.query('INSERT INTO users SET ?', person, function(err, result){
       if (err) throw err;
       res.redirect("/");
   });
});

app.listen(8080, function(){
    console.log("Server running on 8080")
});



// connection.end(function(err) {
//     if (err) {
//       return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
//   });
   

