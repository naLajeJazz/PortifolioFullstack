const express = require('express');  
const app = express();
const bodyParser= require('body-parser');
const connection=require('./database/database');
const Dados= require('./database/dados')


// faz a conexão Database

connection
        .authenticate()
        .then(()=>{
                console.log("Conexão com o banco de dados ok!")
        })
        .catch((err)=>{
                console.log(err)
        });


app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rota home
app.get("/",function(req,res) {

        
res.render("home/index",{

        
})  
});


//rota home
app.get("/home",function(req,res) {

       
res.render("home/index",{

       
})  
});


//rota arte
app.get("/arte",function(req,res) {

        
res.render("arte/index",{

})  
});

//rota devportifolio
app.get("/dev",function(req,res) {

        
res.render("dev/index",{

       
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
//rota admin
app.get("/admin",function(req,res) {

       
        
        
        
res.render("admin/index",{

      
       
       
});

});

//rota post (direciona dados do input email e msg)
app.post("/contatosubmit" , function(req,res){

       
        
        
        //variaveis  recebem dados do formulario "_form"
        let email=req.body.email_form;
        let msg=req.body.msg_form;
        
        

        //armazena no banco de dados "data_" as variaveis "Cad"
        Dados.create({
                data_email:email,
                data_msg:msg
                         
         })
         //lista todos os dados da tabela do banco de dados e armazena em dadosLista
         Dados.findAll({raw:true}).then(dadosLista=>{
                        
                 res.render("home/index",{
          
                        dados:dadosLista,
                        
                                       });
        
        })

});


app.listen(process.env.PORT || 1321,function(erro){

erro ? 
console.log("opa aconteceu um erro!") :
console.log("oba servidor rodando!");

});