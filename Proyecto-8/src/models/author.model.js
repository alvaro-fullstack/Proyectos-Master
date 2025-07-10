const pool = require('../config/database');

const Author = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM authors');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM authors WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ name, email, image }) {
    const [result] = await pool.query(
      'INSERT INTO authors (name, email, image) VALUES (?, ?, ?)',
      [name, email, image]
    );
    return { id: result.insertId, name, email, image };
  },

  async update(id, { name, email, image }) {
    await pool.query(
      'UPDATE authors SET name = ?, email = ?, image = ? WHERE id = ?',
      [name, email, image, id]
    );
    return { id, name, email, image };
  },

  async delete(id) {
    await pool.query('DELETE FROM authors WHERE id = ?', [id]);
    return true;
  },

  async getPostsByAuthor(authorId) {
    const [rows] = await pool.query(
      `SELECT p.*, a.name as author_name, a.email as author_email, a.image as author_image 
       FROM posts p 
       JOIN authors a ON p.author_id = a.id 
       WHERE p.author_id = ?`,
      [authorId]
    );
    return rows;
  }
};

module.exports = Author;