const totalLikes = (blogs) => {
    const reducer = (previousVal, currentVal) => {
        return previousVal + currentVal.likes
    }
    return blogs.reduce(reducer, 0)
}

module.exports = { totalLikes }