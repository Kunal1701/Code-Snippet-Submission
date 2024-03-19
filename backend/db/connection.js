const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'takeuforward'
};

const db = mysql.createConnection(dbConfig);

// Function to create code_snippets table
const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS code_snippets (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50),
      language VARCHAR(50),
      stdin VARCHAR(255),
      source_code TEXT,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(sql, (err) => {
    if (err) throw err;
    console.log('code_snippets table created');
  });
};

// Connect to MySQL and create table
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
  createTable(); // Call function to create table
});

module.exports = db;
