const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

// Add Donor Details
router.post("/add", async (req, res) => {
    try {
        const { userId, bloodGroup, city, phone, lastDonation } = req.body;

        if (!userId || !bloodGroup || !city || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newDonor = new Donor({
            userId,
            bloodGroup,
            city,
            phone,
            lastDonation
        });

        await newDonor.save();
        res.status(201).json({ message: "Donor details saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Search Donors
router.get("/search", async (req, res) => {
    try {
        const { bloodGroup, city } = req.query;

        let filters = {};

        if (bloodGroup && bloodGroup.trim() !== "") {
            filters.bloodGroup = bloodGroup;
        }

        // PARTIAL CITY MATCH
        if (city && city.trim() !== "") {
            filters.city = { $regex: new RegExp(city, "i") };
        }

        const donors = await Donor.find(filters);
        res.json(donors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
