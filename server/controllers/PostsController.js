const { Posts } = require('../models')

class PostsController {
    getAll(req, res, next) {
        Posts.findAll()
            .then(posts => res.json(posts))
            .catch(next)
    }

    store(req, res, next) {
        Posts.create(req.body)
            .then(() => res.send("Create post success!"))
            .catch(next)
    }

    detail(req, res, next) {
        Posts.findByPk(req.params.id)
            .then(post => res.json(post))
            .catch(next)
    }
}

module.exports = new PostsController;