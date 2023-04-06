//Definindo os principais módulos
const express = require('express');
const PrincipalController = require('../controllers/PrincipalController');
const router = express.Router();

router
      .get('/', PrincipalController.principal)
      .get('/linkGerado', PrincipalController.linkGerado)
      .get('/link/:codigoLink', PrincipalController.redirecionar)
      .post('/enviarLink', PrincipalController.enviarLink)
      

module.exports = router;