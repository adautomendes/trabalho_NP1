const Sequelize = require('sequelize');

const sequelize = new Sequelize('eb019_2020_2', 'root', 'root',{
    host:"localhost",
    port:3306,
    dialect:'mysql'
});

module.exports = sequelize;