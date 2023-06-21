const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController')

router.post("/create", commentController.store)
router.get("/:postId/getAll", commentController.getAll)

module.exports = router;