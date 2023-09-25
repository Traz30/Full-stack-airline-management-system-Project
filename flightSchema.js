const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema(
    {
        flight_id: String,          // Unique identifier for the flight
        airline_name: String,      // Name of the airline
        flight_number: String,     // Flight number
        departure_airport: String, // Departure airport
        arrival_airport: String,   // Arrival airport
        departure_time: String,    // Departure time (in a format like "08:00 AM")
        arrival_time: String,      // Arrival time (in a format like "10:00 AM")
        price: Number,             // Ticket price
        available_seats: Number    // Number of available seats
    }
)

const FlightData = mongoose.model('FlightData', flightSchema);

module.exports = FlightData;