var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

// GET /movies/new
router.get("/new", flightsCtrl.new);
// POST /flights
router.post("/", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);
router.get("/", flightsCtrl.index);

module.exports = router;
