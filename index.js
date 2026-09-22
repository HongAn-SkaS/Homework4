import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello, World!",
    author: "Hồng Ân",
    status: "ok"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({ greeting: "Hello from Express API 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});