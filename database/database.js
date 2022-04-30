//importa o sequelize
const Sequelize= require("sequelize");
//cria uma conexaõ com o banco de dados(usuario_msg)
const connection= new Sequelize('usuario_msg',"root","",{
                  host:'localhost',
                  dialect:"mysql"
});
module.exports= connection;