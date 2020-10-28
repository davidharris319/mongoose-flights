const Flight = require("../models/flight.js");

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("flights/show", { title: "Flight Detail", flight });
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const flight = new Flight(req.body);
  console.log(flight);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    console.log(flight);
    res.redirect("/flights");
  });
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
  show,
};
