const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: String,   // "donor" or "receiver"
});

module.exports = mongoose.model("User", UserSchema);
