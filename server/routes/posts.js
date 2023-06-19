const express = require('express');
const router = express.Router();
const postsController = require('../controllers/PostsController')

router.post("/create", postsController.store)
router.get("/:id", postsController.detail)
router.get("/", postsController.getAll)

module.exports = router;