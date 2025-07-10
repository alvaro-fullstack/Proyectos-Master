const express = require('express');
const router = express.Router();

const authorRoutes = require('./author.routes');
const postRoutes = require('./post.routes');

router.use('/author', authorRoutes);
router.use('/post', postRoutes);

module.exports = router;