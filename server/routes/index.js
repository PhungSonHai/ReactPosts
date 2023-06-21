const postsRouter = require('./posts')
const commentRouter = require('./comment')

function route(app) {
    app.use("/posts", postsRouter)
    app.use("/comment", commentRouter)
}

module.exports = route;