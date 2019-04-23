var express = require('express');
var app = express();
var AuthorsController = require("./app/controllers/AuthorsController");
var BooksController = require("./app/controllers/BooksController");


// app.get('/', function(req, res){
//     res.send('Hello World!');
// });

// app.get('/teste', function(req, res){
//     res.status(200).send('Página teste');
// })

app.use("/authors", AuthorsController);
app.use("/books", BooksController);

app.listen(3000, function(){
    console.log('servidor ouvindo na porta 3000!');
});
