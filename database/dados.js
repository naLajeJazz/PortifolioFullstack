//cria tabela de dados 

const Sequelize = require("sequelize");
const connection = require("./database");
//cria a tabela de dados nome 'dados'
const Dados = connection.define('dados',{
                  data_email:{
                  type: Sequelize.STRING,
                  allowNull: false
                  },
                  data_msg:{
                  type: Sequelize.TEXT,
                  allowNull:false
                  }
                  
});

Dados.sync({force:false}).then(()=>{
                  console.log("tabela foi criada!")
})

module.exports= Dados;