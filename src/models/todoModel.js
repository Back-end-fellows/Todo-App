const mongoose = require("mongoose");

const TodoModel = new mongoose.Schema({
	todo: { type: String },
});

const Todo = mongoose.model("Todo", TodoModel);

module.exports = Todo;
