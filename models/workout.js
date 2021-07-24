const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type for workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout",
      },
      duration: {
        type: Number,
        required: "Enter an duration of workout",
      },
      weight: {
        type: Number,
      },
      rep: {
        type: Number,
      },

      set: { type: Number },
      distance: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
