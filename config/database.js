const Sequelize = require('sequelize');

const sequelize = new Sequelize('eb19_2020_2', 'root', 'safra',{
    host:"localhost",
    port:3306,
    dialect:'mysql',
    define:{
        timestaps:false
    }
});

module.exports = sequelize;