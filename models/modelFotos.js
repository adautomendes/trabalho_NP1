const db    = require('../config/database');
const Sequelize  = require('sequelize');

const fotosModelo = db.define('foto', {
    modelo:Sequelize.STRING,
    ano:Sequelize.INTEGER,
    data_inclusao:Sequelize.DATE
},{
    timestamps:false,
    tableName:'foto'
});

module.exports = fotosModelo;