import OpenAI from "openai";
import { db } from "../lib/db.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { message, userId, language } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: `Reply in ${language}` },
      { role: "user", content: message }
    ]
  });

  const reply = response.choices[0].message.content;

  db.run(`INSERT INTO chats(user_id, role, message) VALUES (?, 'user', ?)`,
    [userId, message]);
  db.run(`INSERT INTO chats(user_id, role, message) VALUES (?, 'assistant', ?)`,
    [userId, reply]);

  res.json({ reply });
}
