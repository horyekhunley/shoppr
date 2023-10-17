const express = require('express')
const app = express()

const morgan = require('morgan')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = YAML.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.use(morgan('dev'))
app.use(cookieParser())
app.use(fileUpload({

}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// export app
module.exports = app