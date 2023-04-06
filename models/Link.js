const { DataTypes, Conexao } = require('../db/Conexao');

const Link = Conexao.define('link', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    linkOriginal: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    linkEncurtado: {
        type: DataTypes.STRING(150),
        allowNull:false
    }
}, {updatedAt: false});
Link.sync({ force: false });

module.exports = Link;