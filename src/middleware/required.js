const [_, verifyToken] = require("../utils/token");

async function requiredUser(req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(404).json({ message: "token not found" });
	}

	const jwtToken = token.split(" "); //[Bearer, "ndbkjhkjfhkjahkjahkjadhk"]

	const data = await verifyToken(jwtToken[1]);
	const user = { userId: data.userId, username: data.username };
	res.locals.user = user;
	next();
}

module.exports = requiredUser;
