const express = require("express");
const [registerHandler, loginHandler] = require("./userController");

const router = express.Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);
module.exports = router;

// zod yup joi  // input validation

//  firstname
// lastname
// username
// email // unque // email
//password  // cant't be plain text // hash
