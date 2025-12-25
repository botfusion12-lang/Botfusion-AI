const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ reply: "No message provided." });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Error: Unable to process request." });
  }
});

module.exports = router;;
