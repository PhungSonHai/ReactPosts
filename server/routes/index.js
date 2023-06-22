const postsRouter = require('./posts')
const commentRouter = require('./comment')
const authRouter = require('./auth')

function route(app) {
    app.use("/posts", postsRouter)
    app.use("/comment", commentRouter)
    app.use("/auth", authRouter)
}

module.exports = route;