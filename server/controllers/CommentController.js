const { Comment } = require('../models')

class CommentController {
    store(req, res, next) {
        Comment.create(req.body)
            .then(() => res.send("Create comment success!"))
            .catch(next)
    }

    getAll(req, res, next) {
        Comment.findAll({ where: { postId: req.params.postId } })
            .then(comments => res.json(comments))
            .catch(next)
    }
}

module.exports = new CommentController;