const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String
});

const contact = mongoose.model('contact', listingSchema);
module.exports = contact;