const express = require('express');  
const app = express(); 

app.set('view engine','ejs');

//app.set('views','views');


//rota home
app.get("/home",function(req,res) {

        let mostraTxt=true
res.render("home/index",{

        texto:'Isso é uma variavel string',
        mostra:mostraTxt
})  
});


//rota contato
app.get("/contato",function(req,res) {

        
res.render("contato/index",{

       
})  
});


//rota sobre
app.get("/sobre",function(req,res) {

        
res.render("sobre/index",{

       
})  
});



app.listen(1321,function(erro){

erro ? 
console.log("opa aconteceu um erro!") :
console.log("oba servidor rodando!");

});