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

module.exports = { totalLikes, favoriteBlog }