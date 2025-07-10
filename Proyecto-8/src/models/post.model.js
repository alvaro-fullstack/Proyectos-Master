const pool = require('../config/database');

const Post = {
  async getAll() {
    const [rows] = await pool.query(
      `SELECT p.*, a.name as author_name, a.email as author_email, a.image as author_image 
       FROM posts p 
       JOIN authors a ON p.author_id = a.id`
    );
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query(
      `SELECT p.*, a.name as author_name, a.email as author_email, a.image as author_image 
       FROM posts p 
       JOIN authors a ON p.author_id = a.id 
       WHERE p.id = ?`,
      [id]
    );
    return rows[0];
  },

  async create({ title, description, category, author_id }) {
    const [result] = await pool.query(
      'INSERT INTO posts (title, description, created_at, category, author_id) VALUES (?, ?, NOW(), ?, ?)',
      [title, description, category, author_id]
    );
    return { id: result.insertId, title, description, category, author_id };
  },

  async update(id, { title, description, category, author_id }) {
    await pool.query(
      'UPDATE posts SET title = ?, description = ?, category = ?, author_id = ? WHERE id = ?',
      [title, description, category, author_id, id]
    );
    return { id, title, description, category, author_id };
  },

  async delete(id) {
    await pool.query('DELETE FROM posts WHERE id = ?', [id]);
    return true;
  },

  async getByCategory(category) {
    const [rows] = await pool.query(
      `SELECT p.*, a.name as author_name, a.email as author_email, a.image as author_image 
       FROM posts p 
       JOIN authors a ON p.author_id = a.id 
       WHERE p.category = ?`,
      [category]
    );
    return rows;
  }
};

module.exports = Post;