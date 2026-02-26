const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.json({ message: "MS Enterprise API Running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});