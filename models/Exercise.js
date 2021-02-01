const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	// Defines type attribute
	type: String,

	// Defines name attribute
	name: String,

	// Defines duration attribute
	duration: Number,

	// Defines weight attribute
	weight: Number,

	// Defines distance attribute
	distance: Number,

	// Defines reps attribute
	reps: Number,

	// Defines sets attribute
	sets: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;