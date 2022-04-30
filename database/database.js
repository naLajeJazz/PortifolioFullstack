//importa o sequelize
const Sequelize= require("sequelize");
//cria uma conexaõ com o banco de dados
const connection= new Sequelize('login_teste',"root","",{
                  host:'localhost',
                  dialect:"mysql"
});
module.exports= connection;