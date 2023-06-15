const express = require('express');
const router = express.Router();
const postsController = require('../controllers/PostsController')

router.post("/create", postsController.store)
router.get("/", postsController.getAll)

module.exports = router;