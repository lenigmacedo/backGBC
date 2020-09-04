const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('nWOe1C0RKm', 'nWOe1C0RKm', 'ofHW5z6OXa', {
    host: 'www.remotemysql.com',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
})

class CPF extends Model { }


CPF.init({
    cpf: DataTypes.STRING,
}, { sequelize, freezeTableName: true, modelName: 'tb_cpf' })
CPF.removeAttribute('id')

module.exports = sequelize.models.tb_cpf
