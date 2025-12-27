const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// MongoDB connection (FIXED)
mongoose.connect(process.env.MONGO_URI, {
  connectTimeoutMS: 10000,
  serverSelectionTimeoutMS: 5000
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Start server even if MongoDB connection fails
setTimeout(() => {
  console.log("Server initialization timeout check");
}, 3000);

// Home route
app.get("/", (req, res) => {
  res.send("Blood Donation Backend Running");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/donor", require("./routes/donor"));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is healthy"
  });
});

// Port (FIXED)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
