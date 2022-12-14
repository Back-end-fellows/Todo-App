const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstname: { type: String },
		lastname: { type: String },
		username: { type: String, unique: true, required: true },
		email: { type: String, unique: true, required: true },
		password: { type: String },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
