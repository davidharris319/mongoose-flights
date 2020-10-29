const Ticket = require("../models/ticket.js");
const Flight = require("../models/flight.js");

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render(`flights/tickets/new`, { title: "Add Ticket", flight });
  });
}

function create(req, res) {
  console.log("create action", req.params.id);
  Ticket.create(req.body, function (err, ticket) {
    ticket.flight = req.params.id;
    console.log(ticket);
    ticket.save(function (err) {
      if (err) return res.redirect(`/flights/${req.params.id}/tickets/new`);
      console.log(ticket);
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}

// function addTicket(req, res) {
//   Ticket.create(req.body, function (err, ticket) {
//     ticket.flight = req.params.id;
//     console.log(ticket);
//     ticket.save(function (err) {
//       if (err) return res.redirect(`/flights/${ticket._id}/tickets/new`);
//       console.log(ticket);
//       res.redirect(`/flights/${ticket._id}`);
//     });
//   });
// }

module.exports = {
  new: newTicket,
  create,
  // addTicket,
};
