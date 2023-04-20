const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reaction_Model = new Schema({
  type:String,
  name: String,
  description: String,
  reactant: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Molecule",
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Molecule",
    },
  ],
  hint1: String,
  hint2: String,
  count: Number,
});

module.exports = mongoose.model("Reaction", Reaction_Model);
