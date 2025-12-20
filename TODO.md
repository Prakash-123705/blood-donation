# TODO List for Donor Form Update

- [ ] Update Donor model (backend/models/Donor.js) to include `hasDonatedBlood` (Boolean) and `donationDate` (Date, optional)
- [ ] Update donor form HTML (frontend/donor-form.html) to add radio buttons for "Have you donated blood?" and conditionally show date input
- [ ] Update frontend JavaScript in donor-form.html to collect new fields and send in request
- [ ] Update backend route (backend/routes/donor.js) to handle new fields in /add endpoint
