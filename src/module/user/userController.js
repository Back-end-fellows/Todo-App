const User = require("../../models/userModel");
const bcrypt = require("bcrypt");

async function registerHandler(req, res) {
	const { firstname, lastname, username, email, password } = req.body;
	try {
		const userToRegisterUsername = await User.findOne({ username: username });
		if (userToRegisterUsername) {
			return res.status(400).json({ message: "username already in use" });
		}
		const userToRegisterEmail = await User.findOne({ email: email });
		if (userToRegisterEmail) {
			return res.status(400).json({ message: "email already in use" });
		}
		let salt = await bcrypt.genSalt();

		const hashedPw = await bcrypt.hash(password, salt);

		await User.create({
			firstname: firstname,
			lastname: lastname,
			username: username,
			email: email,
			password: hashedPw,
		});
		return res.json({ message: "registration successful" });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "error" });
	}
}

module.exports = registerHandler;
