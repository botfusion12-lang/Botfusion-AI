const express = require("express");
const cors = require("cors");
const path = require("path");

const chatRoute = require("./api/chat");
const imageRoute = require("./api/image");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend from docs/
app.use(express.static(path.join(__dirname, "../docs")));

// API routes
app.use("/api/chat", chatRoute);
app.use("/api/image", imageRoute);

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../docs/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
