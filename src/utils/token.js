const jwt = require("jsonwebtoken");

const SECRET_KEY = "IamVictoorogbonnaa";
async function generateToken(user) {
	try {
		const token = await jwt.sign(user, SECRET_KEY, {
			expiresIn: "12h",
		});
		return token;
	} catch (error) {
		return "could not generate token";
	}
}

async function verifyToken(token) {
	try {
		let verify = await jwt.verify(token, SECRET_KEY);
		return verify; // {username, userId };
	} catch (error) {
		return "coundn't verify token";
	}
}
module.exports = [generateToken, verifyToken];
