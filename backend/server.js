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

// MongoDB connection - with fallback
if (process.env.MONGO_URI) {
  console.log("Connecting to MongoDB...");
  mongoose.connect(process.env.MONGO_URI, {
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 5000
  })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB connection error:", err.message));
} else {
  console.warn("⚠️  WARNING: MONGO_URI not set! Backend will run without database.");
  console.warn("⚠️  Add MONGO_URI to Render environment variables to enable database features.");
}

// Home route
app.get("/", (req, res) => {
  res.send("Blood Donation Backend Running");
});

// Routes
try {
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/donor", require("./routes/donor"));
  console.log("Routes loaded successfully");
} catch (err) {
  console.error("Error loading routes:", err);
}

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is healthy",
    mongoConnected: mongoose.connection.readyState === 1,
    mongoUri: process.env.MONGO_URI ? "SET" : "NOT SET"
  });
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "Backend is working!",
    mongoStatus: mongoose.connection.readyState,
    timestamp: new Date()
  });
});

// Port (FIXED)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
