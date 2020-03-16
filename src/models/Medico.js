const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('banco_gbc_med', 'lennyk', 'simone20', {
    host: 'www.db4free.net',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
})

class Medico extends Model { }

Medico.init({
    nome: DataTypes.STRING,
    crm: DataTypes.STRING,
    telefone: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    especialidade: DataTypes.STRING
}, { sequelize, modelName: 'tb_medicos' })
Medico.removeAttribute('id')

module.exports = sequelize.models.tb_medicos
