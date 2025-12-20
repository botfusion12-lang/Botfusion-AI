const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { prompt, userId } = req.body;
  if (!prompt) return res.status(400).json({ error: "No prompt provided" });

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      { prompt, n: 1, size: "512x512" },
      { headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` } }
    );

    const url = response.data.data[0].url;
    res.json({ url });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error generating image" });
  }
});

module.exports = router;
