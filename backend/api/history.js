import { db } from "../lib/db.js";

export default function handler(req, res) {
  const { userId } = req.query;

  db.all(`SELECT * FROM chats WHERE user_id=?`, [userId],
    (_, rows) => res.json(rows)
  );
}
