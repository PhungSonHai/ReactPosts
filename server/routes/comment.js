const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController')
const { validateToken } = require('./../middlewares/AuthMiddleware')

router.post("/create", validateToken, commentController.store)
router.get("/:postId/getAll", commentController.getAll)

module.exports = router;