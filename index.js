// Define a JavaScript object that maps airport codes to city names and airport names
// kolkata
// chennai
// mumbai
// delhi
// bangalore
// Hydrabad

const airportData = {
    1: {
        city: "Hyderabad",
        airport: "Rajiv Gandhi International Airport",
        shortForm: "HYD"
      },
      2: {
        city: "Bengaluru",
        airport: "Kempegowda International Airport",
        shortForm: "BLR"
      },
      3: {
        city: "Delhi",
        airport: "Indira Gandhi International Airport",
        shortForm: "DEL"
      },
      4: {
        city: "Mumbai",
        airport: "Chhatrapati Shivaji Maharaj International Airport",
        shortForm: "BOM"
      },
      5: {
        city: "Chennai",
        airport: "Chennai International Airport",
        shortForm: "MAA"
      },
      6: {
        city: "Kolkata",
        airport: "Netaji Subhas Chandra Bose International Airport",
        shortForm: "CCU"
      }
  };
  
// Populate the dropdowns with city names, country names, and short forms
const departureAirportSelect = document.getElementById("departureAirport");
const arrivalAirportSelect = document.getElementById("arrivalAirport");

// Loop through the airport data and add options to the dropdowns
for (const code in airportData) {
  const airport = airportData[code];
  const option = document.createElement("option");
  option.value = code;
  option.textContent = `${airport.city}, ${airport.airport}, ${airport.shortForm}`;
  departureAirportSelect.appendChild(option);
  arrivalAirportSelect.appendChild(option.cloneNode(true));
}

  

document.addEventListener("DOMContentLoaded", function () {

    var departureDropdown = document.getElementById("departureAirport");
    var arrivalDropdown = document.getElementById("arrivalAirport");

    var searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {

        var departureValue = departureDropdown.value;
        var arrivalValue = arrivalDropdown.value;

        var departureCity = airportData[departureValue].city;
        var arrivalCity = airportData[arrivalValue].city;

        console.log("Departure City: " + departureCity);
        console.log("Arrival City: " + arrivalCity);

        localStorage.setItem("departureCity", departureCity);
        localStorage.setItem("arrivalCity", arrivalCity);
    });

});