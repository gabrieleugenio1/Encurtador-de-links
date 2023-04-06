const principal = require('./principalRoute');

//Pegando todas as rotas
module.exports = app =>{
    app.use(
        principal,
        )
}