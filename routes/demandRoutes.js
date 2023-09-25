const express = require("express");
const router = express.Router();
const { getPrediction } = require("../controllers/demandController");

//get
router.get("/:id", getPrediction);

//get

module.exports = router;
