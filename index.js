require("dotenv-safe").config();
const criptografa = require('./criptografia');

const cookieParser = require('cookie-parser')

const express = require('express');
const { filme } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());

// Crie as rotas abaixo deste comentário



app.listen(3000, function() {
  console.log('App executando na porta 3000!')
});

app.get("/filmes", async function (req,res){
  try{
      const resultado = await filme.findAll();
      res.json(resultado)
  }catch (error) {
      console.log(error)
  }
});

app.get("/filme/:id/1", async function(req, res){
  const resultado = await filme.findByPk(id);
  res.json(resultado)
});

app.get("/filme/:codigo/4", async function(req, res){
  const resultado = await filme.findByPk(codigo);
  res.json(resultado)
  function crypto (){
    (criptografa("codigo a ser encriptado"))
    (criptografa("codigo a ser descriptado"))
  }
  });

app.post("/", async function (req,res){
  const resultado = await produto.create(req.body);
  res.json(resultado)
});

app.delete("/filme/:id",async function(req, res){
  var resultado = await filme.destroy({where : {id:req.params.id}});
  res.json(resultado)
});



