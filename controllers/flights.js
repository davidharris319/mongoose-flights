const { model } = require("../models/flights.js");
const flights = require("../models/flights.js");
const Flight = require("../models/flights.js");

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function create(req, res) {
  const flight = newFlight(req.body);
  console.log(flight);
  // flight.save(function (err) {
  //   if (err) return res.render("flights/new");
  //   console.log(flight);
  //   res.redirect("/flights/new");
  // });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "Flights", flights });
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
};
