//importa o sequelize
const Sequelize= require("sequelize");
//cria uma conexaõ com o banco de dados(usuario_msg é o nome do bcd la no mysql)
const connection= new Sequelize('usuario_msg',"root","",{
                  host:'localhost',
                  dialect:"mysql"
});
module.exports= connection;