const mongoose = require("mongoose");

async function ConnectDatabase() {
	try {
		await mongoose.connect(
			"mongodb://mongo:aX7xWglxi5UJUfv9d2J5@containers-us-west-86.railway.app:7679",
			() => {
				console.log("database connected");
			}
		);
	} catch (error) {
		console.error(error);
	}
}

module.exports = ConnectDatabase;
