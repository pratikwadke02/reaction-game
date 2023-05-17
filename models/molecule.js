const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Molecule_Model = new Schema({
      name: String,
      content: [
          {
            atom: String,
            position: Number,
            name: String,
          },
        ],
});

module.exports = mongoose.model("Molecule", Molecule_Model);
