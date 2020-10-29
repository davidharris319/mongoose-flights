const Flight = require("../models/flight.js");
const Ticket = require("../models/ticket.js");

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(flight);
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("flights/show", {
        title: "Flight Detail",
        flight,
        tickets,
      });
    });
  });
}

function create(req, res) {
  const flight = new Flight(req.body);
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
