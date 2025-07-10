const express = require('express');
const router = express.Router();
const author = require('../controllers/author.controller');

// GET all authors
router.get('/', author.getAllAuthors);

// GET author by ID
router.get('/:id', author.getAuthorById);

// POST create new author
router.post('/', author.createAuthor);

// PUT update author
router.put('/:id', author.updateAuthor);

// DELETE author
router.delete('/:id', author.deleteAuthor);

// GET posts by author
router.get('/:id/posts', author.getPostsByAuthor);

module.exports = router;