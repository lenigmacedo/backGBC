const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('banco_gbc_med', 'lennyk', 'simone20', {
    host: 'www.db4free.net',
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
