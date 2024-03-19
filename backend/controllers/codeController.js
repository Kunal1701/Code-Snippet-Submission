const db = require('../db/connection');

exports.submitCode = (req, res) => {
  const { username, language, stdin, sourceCode } = req.body;
  const timestamp = new Date();

  const sql = 'INSERT INTO code_snippets (username, language, stdin, source_code, timestamp) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [username, language, stdin, sourceCode, timestamp], (err, result) => {
    if (err) {
      res.status(500).send('Error submitting code snippet');
    } else {
      res.status(200).send('Code snippet submitted successfully');
    }
  });
};

exports.getAllSnippets = (req, res) => {
  const sql = 'SELECT username, language, stdin, LEFT(source_code, 100) AS source_code_preview, timestamp FROM code_snippets';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving code snippets');
    } else {
      res.status(200).json(result);
    }
  });
};
