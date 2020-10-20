const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

//conectando no db. se tivesse user seria user@password antes do IPE (localhost)
//nodeapi é o nome do db que vamos conectar
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true })
//chamada do model: (tem que ser deps da abertura da conexao)
requireDir('./src/models')

app.use("/api", require("./src/routes"))

app.listen(3001, () => console.log("servidor rodando"));


/*
depois do docker instalado, baixando imagem do mongo:
docker pull mongo
criando container chamado mongodb, colocando o mongo nele, e fazendo redirecionamento de porta - 
toda vez que a porta da esquerda for acessada na minha maquina vai direcionar pra porta à direita, que esta na vm
do container, que esta o mongo, essa porta é a porta padrão do mongo. poderia ser qqr uma à esquerda, que levaria pra porta 
"real".
docker run --name mongodb -p 27017:27017 -d mongo

para ver containers rodando:  
docker ps

pra ver todos: 
docker ps -a

pra rodar um que ja existe:
docker start <nome>
por exemplo
docker start mongodb

*/