const Medico = require('../models/Medico')
const CPF = require('../models/CPF')

function isEmpty(response) {
    return !Object.keys(response).length
}

module.exports = {

    getCPF(req, res) {
        CPF.findAll({
            where: {
                cpf: req.params.cpf
            }
        }).then(response => {
            if (isEmpty(response)) {
                return res.json('vazio')
            } else {
                res.json(response)
            }
        })
    },


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
            res.json(response.status)
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

            console.log(response)

            if (response.includes(1)) {
                res.sendStatus(200)
            } else {
                res.sendStatus(404)
            }



        })
    }

}




