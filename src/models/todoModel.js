const mongoose = require("mongoose");

// collection

const TodoSchema = new mongoose.Schema({
	todo: { type: String },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
