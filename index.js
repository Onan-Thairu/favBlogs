const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb+srv://fStack:172839410511612@cluster0.7rmdo.mongodb.net/blogApp?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
console.log('connected to mongo')

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response, next) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
        .catch(error => next(error))
})

app.post('/api/blogs', (request, response, next) => {
    const blog = new Blog(request.body)

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
        .catch(error => next(error))
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})