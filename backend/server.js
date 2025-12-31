import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("✅ Botfusion backend is running");
});

/* CHAT ENDPOINT */
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  // TEMP response (AI later)
  res.json({
    reply: `You said: ${message}`
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
