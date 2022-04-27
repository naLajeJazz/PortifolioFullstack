const express = require('express');  
const app = express(); 


app.set('view engine','ejs');
app.use(express.static('./public'));

//app.set('views','views');


//rota home
app.get("/",function(req,res) {

        let mostraTxt=true
res.render("home/index",{

        texto:'Isso é uma variavel string',
        mostra:mostraTxt
})  
});


//rota home
app.get("/home",function(req,res) {

        let mostraTxt=true
res.render("home/index",{

        texto:'Isso é uma variavel string',
        mostra:mostraTxt
})  
});


//rota arte
app.get("/arte",function(req,res) {

        let mostraTxt=true
res.render("arte/index",{

        texto:'Isso é uma variavel string',
        mostra:mostraTxt
})  
});

//rota devportifolio
app.get("/dev",function(req,res) {

        let mostraTxt=true
res.render("dev/index",{

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
//rota contatosubmit
app.get("/contatosubmit",function(req,res) {

        
res.render("contatosubmit/index",{

       
})  
});



app.listen(process.env.PORT || 1321,function(erro){

erro ? 
console.log("opa aconteceu um erro!") :
console.log("oba servidor rodando!");

});