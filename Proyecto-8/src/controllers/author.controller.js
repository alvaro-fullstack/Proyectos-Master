const Author = require('../models/author.model');

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.getAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.getById(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { name, email, image } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const newAuthor = await Author.create({ name, email, image });
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { name, email, image } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const updatedAuthor = await Author.update(req.params.id, { name, email, image });
    res.json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    await Author.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostsByAuthor = async (req, res) => {
  try {
    const posts = await Author.getPostsByAuthor(req.params.id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getAllAuthors,getAuthorById,createAuthor,updateAuthor,deleteAuthor,getPostsByAuthor
};