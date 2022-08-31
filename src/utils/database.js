const mongoose = require("mongoose");

async function ConnectDatabase() {
	try {
		await mongoose.connect(
			"mongodb://mongo:Lz7XuVUX11cyqfwKBpIk@containers-us-west-44.railway.app:7796",
			() => {
				console.log("database connected");
			}
		);
	} catch (error) {
		console.error(error);
	}
}

module.exports = ConnectDatabase;
