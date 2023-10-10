const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "please provide name"] },
    description: {
      type: String,
      required: [true, "please provide description"],
    },
  }
);

module.exports = mongoose.model("Demo", demoSchema);
