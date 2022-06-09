var faker = require("@faker-js/faker");
const { error } = require("console");
const mysql = require("mysql2");

  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
  password: "Gg2A7Vyz"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
// select data
//  var q = 'select * from users';
//  connection.query(q, function(error, results, fields){
//      if (error) throw error;
//      console.log(results[0]);
//  });


// var person = {email: faker.faker.internet.email(),
//                      created_at: faker.faker.date.past()
// };

// connection.query('insert into users set ?', person, function(err, result){
//   if (err) throw err;
//   console.log(result);
// })
// connection.end();

var data = [];

for (var i = 0; i<=500; i++){
  data.push([
    faker.faker.internet.email(),
    faker.faker.date.past()
]);
}
console.log(data);

var q = 'insert into users(email, created_at) values ?';

connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});