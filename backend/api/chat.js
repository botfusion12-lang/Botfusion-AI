import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  res.json({
    reply: `Botfusion received: ${message}`
  });
});

export default router;
