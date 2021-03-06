var express = require('express');
var app = express();
var UsersController = require("./app/controllers/UsersController");
var LoginController = require("./app/controllers/LoginController");

require('dotenv-safe').load();

// app.get('/', function(req, res){
//     res.send('Hello World!');
// });

// app.get('/teste', function(req, res){
//     res.status(200).send('Página teste');
// })

app.use("/users", UsersController);
app.use("/login", LoginController);


app.listen(3000, function(){
    console.log('servidor ouvindo na porta 3000!');
});
