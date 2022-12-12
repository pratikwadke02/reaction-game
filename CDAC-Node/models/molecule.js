const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Molecule_Model = new Schema({
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
});

module.exports = mongoose.model("Molecule", Molecule_Model);
