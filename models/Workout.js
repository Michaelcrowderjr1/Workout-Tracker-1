const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	// creates a day attribute
	day: {
		type: Date,
	},
	// Exercises definition
	exercises: [
		{
			// Defines type attribute
			type: {type: String},

			// Defines name attribute
			name: {type: String},

			// Defines duration attribute
			duration: {type: Number},

			// Defines weight attribute
			weight: {type: Number},

			// Defines distance attribute
			distance: {type: Number},

			// Defines reps attribute
			reps: {type: Number},

			// Defines sets attribute
			sets: {type: Number}
		},
	],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;