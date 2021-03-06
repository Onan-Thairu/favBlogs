const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')

blogRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
        .catch((error) => {
            logger.error(error)
        })
})

blogRouter.post('/', (request, response) => {
    const body = request.body

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    blog
        .save()
        .then(savedNote => {
            response.json(savedNote)
        })
        .catch(error => {
            logger.error(error)
        })
})

module.exports = blogRouter