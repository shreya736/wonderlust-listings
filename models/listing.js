const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.andrewshoemaker.com/images/640/burning-secret-maui-secret-beach-sunset.jpg",
        set: (v) =>
            v === ""
                ? "https://www.andrewshoemaker.com/images/640/burning-secret-maui-secret-beach-sunset.jpg"
                : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    Owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

});



listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
