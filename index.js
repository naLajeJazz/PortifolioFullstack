const express = require('express');  
const app = express(); 

app.set('view engine','ejs');

app.get("/",function(req,res) {
res.render("index")  
});


app.listen(1321,function(erro){

erro ? 
console.log("opa aconteceu um erro!") :
console.log("oba servidor rodando!");

});