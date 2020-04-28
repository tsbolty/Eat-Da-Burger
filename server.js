var express = require("express");
var mysql = require("mysql")
var exphbs = require("express-handlebars");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gladiator5972!",
    port: 3306,
    database: ""
});

connection.connect(err => {
    if (err) throw err
    console.log(`Connected to MySQL as id ${connection.threadId}`)
})


app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`)
})