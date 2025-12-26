const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));


// HOME ROUTE (IMPORTANT)
app.get("/", (req, res) => {
    res.send("Blood Donation Backend Running");
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/donor", require("./routes/donor"));

// Start Server
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is healthy"
  });
});
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
