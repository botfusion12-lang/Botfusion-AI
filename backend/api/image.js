import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "512x512"
    });
    res.json({ imageUrl: response.data[0].url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
