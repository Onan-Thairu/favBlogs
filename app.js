const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const config = require('./utils/config')

logger.info(`connecting to ${config.MONGO_URI}`)

mongoose.connect(config.MONGO_URI)
    .then(() => {
        logger.info('connected to mongo')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app

