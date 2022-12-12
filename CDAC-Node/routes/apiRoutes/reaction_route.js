const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const reaction_controller = require("../../controller/reaction_controller");

// Get Reaction
router.get(
  "/reactant",
  [body("id").not().isEmpty().withMessage("id is required")],
  reaction_controller.Get_Reactants
);

// Get Reaction-list
router.get("/reaction", reaction_controller.Get_Reaction_List);

// Send Products and the verify
// router.post('/verify-reaction')

// Get reaction types
// router.get("/types")

module.exports = router;
//
