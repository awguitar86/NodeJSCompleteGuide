const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'LondonOntario0810', {
  dialect: 'mysql', 
  host: 'localhost'
})

module.exports = sequelize