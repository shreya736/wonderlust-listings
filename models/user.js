const mongoose = require("mongoose");

const passportLocalMongoose =
    require("passport-local-mongoose").default ||
    require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// Use email as username
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
