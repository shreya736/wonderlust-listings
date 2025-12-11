const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.andrewshoemaker.com/images/640/burning-secret-maui-secret-beach-sunset.jpg",
        set: (v) => v === "" ? "https://www.andrewshoemaker.com/images/640/burning-secret-maui-secret-beach-sunset.jpg"
            : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;