const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
	fName: {
		type: String,
		trim: true,
		require: true,
	},

	lName: {
		type: String,
		trim: true,
		require: true,
	},

	email: {
		type: String,
		require: true,
	}
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "email",
});

module.exports = mongoose.model("Registration", userSchema);
