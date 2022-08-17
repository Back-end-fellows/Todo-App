const mongoose = require("mongoose");

async function ConnectDatabase() {
	try {
		await mongoose.connect(
			"mongodb://mongo:ih6nEaZ9RZtc9bdlZJnS@containers-us-west-61.railway.app:7060",
			() => {
				console.log("database connected");
			}
		);
	} catch (error) {
		console.error(error);
	}
}

module.exports = ConnectDatabase;
