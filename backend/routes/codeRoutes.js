const express = require('express');
const router = express.Router();
const codeController = require('../controllers/codeController');

router.post('/submit', codeController.submitCode);
router.get('/snippets', codeController.getAllSnippets);

module.exports = router;
