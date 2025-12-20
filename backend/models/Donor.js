const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
    userId: String,
    bloodGroup: String,
    city: String,
    phone: String,
    lastDonation: Date,
});

module.exports = mongoose.model("Donor", DonorSchema);
