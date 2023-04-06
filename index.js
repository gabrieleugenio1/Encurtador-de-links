'use strict';
//Ativar .env
require("dotenv").config();

//Configuração inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Ativar configurações
const configExpress = require("./config/express")(express, app);

//Porta em execução
app.listen(port, console.log(`Servidor executando na porta ${port}`));
