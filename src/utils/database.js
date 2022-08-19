const mongoose = require("mongoose");

async function ConnectDatabase() {
	try {
		await mongoose.connect(
			"mongodb://mongo:Kp2oukKg3c04sQ8GdWcC@containers-us-west-76.railway.app:7641",
			() => {
				console.log("database connected");
			}
		);
	} catch (error) {
		console.error(error);
	}
}

module.exports = ConnectDatabase;
