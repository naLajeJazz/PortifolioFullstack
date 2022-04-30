//cria tabela de dados 

const Sequelize = require("sequelize");
const connection = require("./database");
//cria a tabela de dados nome 'dados'
const Dados = connection.define('dados',{
                  nome:{
                  type: Sequelize.STRING,
                  allowNull: false
                  },
                  email:{
                  type: Sequelize.TEXT,
                  allowNull:false
                  },
                  senha:{
                  type: Sequelize.TEXT,
                  allowNull:false
                  }
});

Dados.sync({force:false}).then(()=>{
                  console.log("tabela foi criada!")
})

module.exports= Dados;