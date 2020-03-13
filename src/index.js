const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 3333)


