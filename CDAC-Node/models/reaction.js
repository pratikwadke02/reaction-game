const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reaction_Model = new Schema({
  name: String,
  description: String,
  reactant: {
    type: [
      {
        name: String,
        content: {
          type: [
            {
              atom: String,
              postion: Number,
            },
          ],
        },
      },
    ],
  },
  product: {
    type: [
      {
        name: String,
        content: {
          type: [
            {
              atom: String,
              postion: Number,
            },
          ],
        },
      },
    ],
  },
  hint1: String,
  hint2: String,
});

module.exports =  mongoose.model("Reactions", Reaction_Model);


