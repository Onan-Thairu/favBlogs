var _ = require('lodash')

const totalLikes = (blogs) => {
    const reducer = (previousVal, currentVal) => {
        return previousVal + currentVal.likes
    }
    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const maxLikes = blogs.reduce((previousBlog, currentBlog) => {
        return (previousBlog.likes > currentBlog.likes) ? previousBlog : currentBlog
    })
    return maxLikes
}

const mostBlogs = (blogs) => {
    const obj = _.countBy(blogs, 'author')
    const highest = Object.keys(obj).reduce((prev, cur) => {
        return obj[prev] > obj[cur] ? { 'author': prev, 'blogs': obj[prev] } : { 'author': cur, 'blogs': obj[cur] }
    })
    return highest
}

module.exports = { totalLikes, favoriteBlog, mostBlogs }