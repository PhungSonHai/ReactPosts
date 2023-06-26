const { Comment } = require('../models')

class CommentController {
    store(req, res, next) {
        const username = req.user.username
        
        req.body.username = username

        Comment.create(req.body)
            .then(() => res.json({ message: "Create comment success!", dataCreate: req.body }))
            .catch(next)
    }

    getAll(req, res, next) {
        Comment.findAll({ where: { postId: req.params.postId } })
            .then(comments => res.json(comments))
            .catch(next)
    }
}

module.exports = new CommentController;