const Medico = require('../models/Medico')

function isEmpty(response) {
    return !Object.keys(response).length
}

module.exports = {

    getDoctors(req, res) {
        Medico.findAll().then(medicos => {
            res.json(medicos)
        })
    },

    postDoctor(req, res) {
        Medico.create({
            nome: req.body.nome,
            crm: req.body.crm,
            telefone: req.body.telefone,
            estado: req.body.estado,
            cidade: req.body.cidade,
            especialidade: req.body.especialidade
        }).then((response) => {
            res.json(response)
        })
    },

    searchDoctor(req, res) {
        Medico.findAll({
            where: {
                crm: req.params.crm
            }
        }).then(response => {
            if (isEmpty(response)) {
                return res.json('vazio')
            } else {
                res.json(response)
            }


        })

    },
    deleteDoctor(req, res) {
        Medico.destroy({
            where: {
                crm: req.params.crm
            }
        }).then(response => {
            console.log(response)
            if (response > 0) {
                res.json(`Excluido ${response} médicos`)
            } else {
                res.json('Nenhum médico excluido')
            }
        })
    },

    updateDoctor(req, res) {


        //TODO RETORNAR CASO FOR ALTERADO OU NÃO ALGO DA TABELA

        Medico.update({
            nome: req.body.nome,
            especialidade: req.body.especialidade,
            telefone: req.body.telefone,
            estado: req.body.estado,
            cidade: req.body.cidade,

        }, {
            returning: true, where: {
                crm: req.params.crm
            }
        }).then(response => {
            if (response > 0) {
                res.json("Alterado")
            } else {
                res.json("Nada alterado")
            }
        })
    }

}




