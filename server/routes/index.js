const postsRouter = require('./posts')

function route(app) {
    app.use("/posts", postsRouter)
}

module.exports = route;