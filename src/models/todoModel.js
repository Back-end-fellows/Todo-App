const mongoose = require("mongoose");

// collection

const TodoSchema = new mongoose.Schema({
	todo: { type: String },
	userId: { type: String, required: true },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
