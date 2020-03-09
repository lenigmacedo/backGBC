const express = require('express')
const routes = new express.Router();
const dbController = require('./controllers/dbController')


routes.get('/', (req, res) => {
  res.send('GET request to the homepage')
})


routes.get('/medicos', dbController.getDoctors)

routes.post('/create', dbController.postDoctor)

routes.get('/medico/:crm?', dbController.searchDoctor)

routes.delete('/medico/:crm/delete', dbController.deleteDoctor)

routes.put('/medico/:crm/update', dbController.updateDoctor)

module.exports = routes