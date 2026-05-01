const express = require("express");
const app = express();

// Endpoint principal
app.get("/", (req, res) => {
  res.send("DevSecOps Pipeline Running");
});

// Endpoint vulnerable (XSS)
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Results for: ${query}`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});