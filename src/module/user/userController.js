const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const [generateToken] = require("../../utils/token");
// const [generateToken] = require("../../utils/token");
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

async function loginHandler(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) return res.status(400).json({ message: "User not found" });
    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched)
      return res.status(400).json({ message: "Password incorrect" });
    const data = {
      userId: user._id,
      username: user.username,
    };
    const token = await generateToken(data);
    return res.status(201).json({ message: "Login succesfull", token });
  } catch (error) {
    res.status(400).json({ message: "internal serval error" });
  }
}

module.exports = [registerHandler, loginHandler];
