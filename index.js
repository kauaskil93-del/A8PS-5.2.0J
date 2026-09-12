const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "online",
    server: "A8 Private Test Server",
    version: "0.1"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/datacenters", (req, res) => {
  res.json({
    status: "ok",
    datacenters: []
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`A8 server running on port ${PORT}`);
});