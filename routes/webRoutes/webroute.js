const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/reaction-page/:id/:type", (req, res) => {
  res.render("reaction");
});

router.get("/reaction-list/:type", (req, res) => {
  res.render("reactionList");
});

module.exports = router;
