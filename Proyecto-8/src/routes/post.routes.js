const express = require('express');
const router = express.Router();
const post = require('../controllers/post.controller');

// GET all posts
router.get('/', post.getAllPosts);

// GET post by ID
router.get('/:id', post.getPostById);

// POST create new post
router.post('/', post.createPost);

// PUT update post
router.put('/:id', post.updatePost);

// DELETE post
router.delete('/:id', post.deletePost);

// GET posts by category
router.get('/category/:category', post.getPostsByCategory);

module.exports = router;