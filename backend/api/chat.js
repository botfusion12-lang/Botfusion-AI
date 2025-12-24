const express = require('express');
const router = express.Router();

// Example POST chat endpoint
router.post('/', async (req, res) => {
  const { message } = req.body;
  // Connect to OpenAI API
  const reply = `You asked: ${message}`; // replace with AI call
  res.json({ reply });
});

module.exports = router;
