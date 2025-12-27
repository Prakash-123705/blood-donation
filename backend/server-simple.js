const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Test route
app.get("/", (req, res) => {
  res.json({ 
    message: "Blood Donation Backend is Running!",
    timestamp: new Date()
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is healthy",
    timestamp: new Date()
  });
});

// Simple test route - doesn't need MongoDB
app.post("/api/auth/test", (req, res) => {
  res.json({ 
    message: "Test successful!",
    received: req.body 
  });
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
