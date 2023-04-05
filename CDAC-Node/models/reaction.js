const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reaction_Model = new Schema({
  type:String,
  name: String,
  description: String,
  reactant: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Molecules",
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Molecules",
    },
  ],
  hint1: String,
  hint2: String,
});

module.exports = mongoose.model("Reaction", Reaction_Model);
